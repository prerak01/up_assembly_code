import json

with open('up_ac.json','r') as f:
    data=json.load(f)
    f.close()

def update(d):
    if len(d)==1:
        return update(d[0])
    else:
        return list(map(lambda x:x[:2],d))
         
        



for feature in data['features']:

    if 'coordinates' not in feature['geometry']:
        print(feature['properties']['AC_NAME'])
        data['features'].remove(feature)
    else:
        x=feature['geometry']['coordinates']
        x[0]= [ y[:2] for y in x[0] ]

with open('up_ac1.json','w') as f:
    json.dump(data,f)  
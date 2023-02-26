import geopandas as gpd

# Load the GeoJSON file into a GeoDataFrame
gdf = gpd.read_file('tmp.json')

# Plot the GeoDataFrame using Matplotlib
x=gdf.plot()


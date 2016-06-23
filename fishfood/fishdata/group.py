import pandas as pd


data = pd.read_csv('fishdata/fish_clean.csv')
stocks = data.groupby('stockid')

	

def getStock(stockid):

	print("stockid in getStock", stockid)

	group = stocks.get_group(stockid)

	# print("group.columns", group.columns)

	df = pd.concat([group.year, group['U/Umsytouse'], group['B/Bmsytouse']], axis=1)

	# print("df", df.head())

	return df


data2 = pd.read_csv('fishdata/cluster.csv')
stock2 = data2.groupby('Fish')

def getCluster(stockid):
	
	group = stock2.get_group(stockid)
	cluster = group['cluster']
	return cluster
	
	

# export function() {
	# group = stocks.get_group(   selected fish   )
# }





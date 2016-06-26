# Overfishing Application

Overfishing is one of the biggest and most neglected issues of our time. The oceans play a crucial role in maintainig a stable atmosphere and also provide food for billions of people on earth. Maintaining a healthy ecosystem is important everywhere, but in the oceans, an unbalanced and collapsing ecosystem results in substantial effects on the levels of CO2 in our atmosphere and thus has catastrophic effects, not just for economies that rely on fishing to sustain them, but also for fish populations and ultimately for climate change.

Here I build an app that allows users to see if a particular fish is being overfished or not. Using data from the National Oceanic and Atmospheric Association.

### cluster folder
contains code for a kmeans cluster plot in d3, where th user can hover over a point to see which fish it represents. Fish are clustered into three levels of threat or overfishedness. 

### Fishfood folder
This contains the flask app. Fish specific search tool that returns biomass/biomassmsy ([max sustainable yield](https://en.wikipedia.org/wiki/Sustainable_yield_in_fisheries)) plot over the past 60 years. Unfortunately there are major holes in the data that have not yet been fixed. The background colour changes according to threat level. Basic red for highly threatened, orange for threatened and green for not threatened. 

More to come.

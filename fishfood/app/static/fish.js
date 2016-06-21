// var availableFish = [
// 	{
// 		value: 12345, // id
// 		label: "Tuna"
// 	},
// 	{
// 		...
// 	}
// ]

var availableFish = [
 {'label': 'Sprat North Sea', 'value': 'SPRATNS'},
 {'label': 'Herring NAFO 4R fall spawners', 'value': 'HERR4RFA'},
 {'label': 'European Plaice ICES VIIe', 'value': 'PLAICECHW'},
 {'label': 'Skipjack tuna Western Atlantic', 'value': 'SKJWATL'},
 {'label': 'West coast rock lobster South Africa Areas 5-6',
  'value': 'CRLOBSTERSA56'},
 {'label': 'Herring ICES VIIa-g-h-j', 'value': 'HERRSIRS'},
 {'label': 'New Zealand ling New Zealand Area LIN 6b', 'value': 'NZLINGLIN6b'},
 {'label': 'Cusk NAFO 4X', 'value': 'CUSK4X'},
 {'label': 'Rex sole Gulf of Alaska', 'value': 'REXSOLEGA'},
 {'label': 'Herring ICES 30', 'value': 'HERR30'},
 {'label': 'Sailfish Western Atlantic', 'value': 'SAILWATL'},
 {'label': 'English sole Pacific Coast', 'value': 'ESOLEPCOAST'},
 {'label': 'Bluefish Atlantic Coast', 'value': 'BLUEFISHATLC'},
 {'label': 'Longspine thornyhead Pacific Coast', 'value': 'LSTHORNHPCOAST'},
 {'label': 'Hoki Eastern New Zealand', 'value': 'HOKIENZ'},
 {'label': 'Rougheye rockfish Bering Sea and Aleutian Islands',
  'value': 'REYEROCKBSAI'},
 {'label': 'Deepwater flathead Southeast Australia',
  'value': 'DEEPFLATHEADSE'},
 {'label': 'Japanese anchovy Inland Sea of Japan', 'value': 'JANCHOSETO'},
 {'label': 'European pilchard ICES VIIIc-IXa', 'value': 'SARDPVIIIc-IXa'},
 {'label': 'Yellowfin tuna Central Western Pacific', 'value': 'YFINCWPAC'},
 {'label': 'American Plaice NAFO-3Ps', 'value': 'AMPL3Ps'},
 {'label': 'Red king crab Bristol Bay', 'value': 'RKCRABBB'},
 {'label': 'Monkfish Labrador Shelf - Grand Banks - St. Pierre Bank',
  'value': 'MONK2J3KLNOPs'},
 {'label': 'Blue Squat Lobster Chilean', 'value': 'BSQLOBSTERCH'},
 {'label': 'Atlantic cod Georges Bank', 'value': 'CODGB'},
 {'label': 'Sole West Africa Subgroup 1', 'value': 'SOLEWASG1'},
 {'label': 'Blacknose shark Atlantic', 'value': 'BNOSESHARATL'},
 {'label': 'Rock Lobster South Australia Northern Zone',
  'value': 'RROCKLOBSTERSAUSNZ'},
 {'label': 'Whiting NS-VIId', 'value': 'WHITNS-VIId'},
 {'label': 'School whiting Southeast Australia', 'value': 'SWHITSE'},
 {'label': 'Red Squat Lobster Chile Region V-VIII', 'value': 'RSQLOBSTERCH'},
 {'label': 'Haddock Faroe Plateau', 'value': 'HADFAPL'},
 {'label': 'Herring NAFO 4R spring spawners', 'value': 'HERR4RSP'},
 {'label': 'Blacktip shark Gulf of Mexico', 'value': 'BTIPSHARGM'},
 {'label': 'Pink Cusk-eel Chile', 'value': 'PCEELCH'},
 {'label': 'Atlantic cod NAFO 4TVn', 'value': 'COD4TVn'},
 {'label': 'Yellowfin tuna Indian Ocean', 'value': 'YFINEIO'},
 {'label': 'Anchovy Northern Adriatic Sea', 'value': 'ANCHMEDGSA17'},
 {'label': 'Atlantic cod NAFO 3NO', 'value': 'COD3NO'},
 {'label': 'Jackass morwong Southeast Australia', 'value': 'MORWONGSE'},
 {'label': 'Dover sole Gulf of Alaska', 'value': 'DSOLEGA'},
 {'label': 'Herring Northern Irish Sea', 'value': 'HERRNIRS'},
 {'label': 'Red king crab Pribilof Islands', 'value': 'RKCRABPI'},
 {'label': 'Hoki Western New Zealand', 'value': 'HOKIWNZ'},
 {'label': 'Gag Southern Atlantic coast', 'value': 'GAGSATLC'},
 {'label': 'Lingcod Southern Pacific Coast', 'value': 'LINGCODSPCOAST'},
 {'label': 'Greenland halibut Northeast Arctic', 'value': 'GHALNEAR'},
 {'label': 'Kelp greenling Oregon Coast', 'value': 'KELPGREENLINGORECOAST'},
 {'label': 'Herring ICES 31', 'value': 'HERR31'},
 {'label': 'Cape horse mackerel South Africa South coast', 'value': 'CTRACSA'},
 {'label': 'Sardine Gulf of Lions', 'value': 'SARDMEDGSA7'},
 {'label': 'Bluenose New Zealand', 'value': 'BNSNZ'},
 {'label': 'Atlantic surfclam Mid-Atlantic Coast', 'value': 'SURFMATLC'},
 {'label': 'flounder Inland Sea of Japan', 'value': 'OFLOUNSETO'},
 {'label': 'Mutton snapper Southern Atlantic coast and Gulf of Mexico',
  'value': 'MUTSNAPSATLCGM'},
 {'label': 'Skipjack tuna Indian Ocean', 'value': 'SKJCIO'},
 {'label': 'Southern blue whiting Campbell Island Rise',
  'value': 'SBWHITACIR'},
 {'label': 'Cuttlefish West Africa', 'value': 'CUTTLEWA'},
 {'label': 'Dover sole Pacific Coast', 'value': 'DSOLEPCOAST'},
 {'label': 'Greenland halibut NAFO 4RST', 'value': 'GHAL4RST'},
 {'label': 'Atka mackerel Bering Sea and Aleutian Islands',
  'value': 'ATKABSAI'},
 {'label': 'Patagonian toothfish Macquarie Island', 'value': 'PTOOTHFISHMI'},
 {'label': 'Summer flounder Mid-Atlantic Coast', 'value': 'SFLOUNMATLC'},
 {'label': 'Snapper Northern Spencer Gulf', 'value': 'SNAPSAUSNSG'},
 {'label': 'Japanese pilchard Tsushima Strait', 'value': 'PILCHTSST'},
 {'label': 'Sardine West Africa Zone A+B', 'value': 'SARDWAZAB'},
 {'label': 'Tilefish Gulf of Mexico', 'value': 'TILEGM'},
 {'label': 'Northern Australia brown tiger shrimp', 'value': 'BTSHRIMPNAUST'},
 {'label': 'Blue Warehou Eastern half of Southeast Australia',
  'value': 'WAREHOUESE'},
 {'label': 'Pacific ocean perch Pacific Coast', 'value': 'POPERCHPCOAST'},
 {'label': 'Yellowtail flounder Cape Cod / Gulf of Maine',
  'value': 'YELLCCODGOM'},
 {'label': 'Albacore tuna North Pacific', 'value': 'ALBANPAC'},
 {'label': 'common European sole Bay of Biscay', 'value': 'SOLEVIII'},
 {'label': 'Pollock Northeast Arctic', 'value': 'POLLNEAR'},
 {'label': 'Atlantic sharpnose shark Atlantic', 'value': 'SNOSESHARATL'},
 {'label': 'Japanese anchovy Tsushima Strait', 'value': 'JANCHOTSST'},
 {'label': 'Redfish species NAFO 3M', 'value': 'REDFISHSPP3M'},
 {'label': 'Striped marlin North Pacific', 'value': 'STMARLINNPAC'},
 {'label': 'Dusky rockfish Gulf of Alaska', 'value': 'DUSROCKGA'},
 {'label': 'Deep-water Rose Shrimp GSA 12-16', 'value': 'RSHRMPMEDGSA12-16'},
 {'label': 'Sardine South Africa', 'value': 'SARDSA'},
 {'label': 'West coast rock lobster South Africa Areas 1-2',
  'value': 'CRLOBSTERSA12'},
 {'label': 'Giant stargazer NZ Area STA7', 'value': 'GSTRGZRSTA7'},
 {'label': 'Southern hake Sub-Antarctic', 'value': 'SOUTHHAKESA'},
 {'label': 'common gemfish New Zealand', 'value': 'GEMFISHNZ'},
 {'label': 'Threadfin West Africa Subgroup 2', 'value': 'THREADWASG2'},
 {'label': 'Sailfish Eastern Atlantic', 'value': 'SAILEATL'},
 {'label': 'Gray triggerfish Gulf of Mexico', 'value': 'GTRIGGM'},
 {'label': 'Bluefin tuna Eastern Atlantic', 'value': 'ATBTUNAEATL'},
 {'label': 'Hake Northeast Atlantic South', 'value': 'HAKESOTH'},
 {'label': 'Olive flounder Sea of Japan North', 'value': 'OFLOUNNSJ'},
 {'label': 'Striped marlin Western and Central North Pacific',
  'value': 'STMARLINWCNPAC'},
 {'label': 'Windowpane flounder - Gulf of Maine / Georges Bank',
  'value': 'WINDOWGOMGB'},
 {'label': 'New Zealand ling Eastern half of Southeast Australia',
  'value': 'NZLINGESE'},
 {'label': 'Widow rockfish Pacific Coast', 'value': 'WROCKPCOAST'},
 {'label': 'Bluefin tuna Western Atlantic', 'value': 'ATBTUNAWATL'},
 {'label': 'Pacific bluefin tuna Pacific Ocean', 'value': 'PACBTUNA'},
 {'label': 'Alfonsino Chile', 'value': 'AFLONCH'},
 {'label': 'Red Shrimp Northern Spain', 'value': 'RDSHRMPMEDGSA6'},
 {'label': 'Swordfish Indian Ocean', 'value': 'SWORDIO'},
 {'label': 'Atlantic cod Northeast Arctic', 'value': 'CODNEAR'},
 {'label': 'Herring ICES 25-32', 'value': 'HERR2532'},
 {'label': 'Ocean pout Northwestern Atlantic Coast', 'value': 'OPOUTNWATLC'},
 {'label': 'Argentine anchoita Southern Argentina', 'value': 'ARGANCHOSARG'},
 {'label': 'Pollock or saithe Iceland Grounds', 'value': 'POLLIEG'},
 {'label': 'Northern Australia grooved Tiger Prawn', 'value': 'GTPRAWNNAUST'},
 {'label': 'Bigeye tuna Indian Ocean', 'value': 'BIGEYEIO'},
 {'label': 'Orange Roughy Chatham Rise', 'value': 'OROUGHYCR'},
 {'label': 'West coast rock lobster South Africa Areas 3-4',
  'value': 'CRLOBSTERSA34'},
 {'label': 'Anchovy South Africa', 'value': 'ANCHOSA'},
 {'label': 'Bight redfish Southeast Australia', 'value': 'BIGHTREDSE'},
 {'label': 'Spotted spiny dogfish Pacific Coast', 'value': 'SPSDOGPCOAST'},
 {'label': 'Capelin Barents Sea', 'value': 'CAPENOR'},
 {'label': 'Croaker West Africa Subgroup 2', 'value': 'CROAKSPPWASG2'},
 {'label': 'Haddock Iceland', 'value': 'HADICE'},
 {'label': 'Albacore tuna South Atlantic', 'value': 'ALBASATL'},
 {'label': 'Atlantic cod NAFO 3M', 'value': 'COD3M'},
 {'label': 'Sandeel North Sea Area 2', 'value': 'SEELNSSA2'},
 {'label': 'Yellowtail flounder Georges Bank', 'value': 'YELLGB'},
 {'label': 'Northern shrimp Gulf of Maine', 'value': 'PANDALGOM'},
 {'label': 'Blue Whiting Northeast Atlantic', 'value': 'BWHITNEA'},
 {'label': 'Monkfish Gulf of Maine / Northern Georges Bank',
  'value': 'MONKGOMNGB'},
 {'label': 'Gulf menhaden Gulf of Mexico', 'value': 'MENATGM'},
 {'label': 'Vermilion snapper Southern Atlantic coast', 'value': 'VSNAPSATLC'},
 {'label': 'Greater amberjack Southern Atlantic coast',
  'value': 'GRAMBERSATLC'},
 {'label': 'Haddock ICES IIIa and North Sea', 'value': 'HADNS-IIIa'},
 {'label': 'Smooth oreo Chatham Rise', 'value': 'SMOOTHOREOCR'},
 {'label': 'American lobster Georges Bank', 'value': 'LOBSTERGB'},
 {'label': 'Black Grouper Gulf of Mexico and South Atlantic',
  'value': 'BLACKGROUPERGMSATL'},
 {'label': 'Horse Mackerel West Africa', 'value': 'HMACKWA'},
 {'label': 'Kingklip South Africa', 'value': 'KINGKLIPSA'},
 {'label': 'Striped marlin Southwestern Pacific Ocean',
  'value': 'STMARLINSWPO'},
 {'label': 'Chilipepper Southern Pacific Coast', 'value': 'CHILISPCOAST'},
 {'label': 'Rock sole Hecate Strait', 'value': 'RSOLEHSTR'},
 {'label': 'Sardinella West Africa', 'value': 'SARDINWA'},
 {'label': 'English sole Hecate Strait', 'value': 'ESOLEHS'},
 {'label': 'Common Sole Northern Adriatic Sea', 'value': 'SOLMEDGSA17'},
 {'label': 'American Plaice NAFO-3LNO', 'value': 'AMPL3LNO'},
 {'label': 'Patagonian grenadier Southern Argentina',
  'value': 'PATGRENADIERSARG'},
 {'label': 'Silverfish Southeast Australia', 'value': 'SILVERFISHSE'},
 {'label': 'Pacific herring Sitka', 'value': 'HERRSITKA'},
 {'label': 'Sardine South of Sicily', 'value': 'SARDMEDGSA16'},
 {'label': 'Sablefish Pacific Coast', 'value': 'SABLEFPCOAST'},
 {'label': 'Flathead sole Gulf of Alaska', 'value': 'FLSOLEGA'},
 {'label': 'Herring Togiak District', 'value': 'HERRTOG'},
 {'label': 'Yelloweye rockfish Pacific Coast', 'value': 'YEYEROCKPCOAST'},
 {'label': 'Rock Lobster South Australia Southern Zone',
  'value': 'RROCKLOBSTERSAUSSZ'},
 {'label': 'Southern hake Chatham Rise', 'value': 'SOUTHHAKECR'},
 {'label': 'Walleye pollock Northern Sea of Okhotsk', 'value': 'WPOLLNSO'},
 {'label': 'Shortraker rockfish Bering Sea and Aleutian Islands',
  'value': 'SRAKEROCKBSAI'},
 {'label': 'Bank Rockfish California', 'value': 'BNKROCKCAL'},
 {'label': 'Acadian redfish Gulf of Maine / Georges Bank',
  'value': 'ACADREDGOMGB'},
 {'label': 'Greenspotted rockfish Pacific Coast South',
  'value': 'GRSPROCKSCAL'},
 {'label': 'Sprat ICES Baltic Areas 22-32', 'value': 'SPRAT22-32'},
 {'label': 'Haddock Northeast Arctic', 'value': 'HADNEAR'},
 {'label': 'Herring North Sea', 'value': 'HERRNS'},
 {'label': 'Albacore tuna Indian Ocean', 'value': 'ALBAIO'},
 {'label': 'Red rock lobster New Zealand area CRA3',
  'value': 'RROCKLOBSTERCRA3'},
 {'label': 'Norwegian Spring Spawning Herring', 'value': 'HERRNORSS'},
 {'label': 'Southern Pink Shrimp West Africa', 'value': 'SPSHRIMPWA'},
 {'label': 'Red grouper Gulf of Mexico', 'value': 'RGROUPGM'},
 {'label': 'Sole West Africa Subgroup 3', 'value': 'SOLEWASG3'},
 {'label': 'Herring Scotian Shelf and Bay of Fundy', 'value': 'HERR4VWX'},
 {'label': 'Alaskan Pollock Pacific Coast of Japan', 'value': 'APOLLPJPN'},
 {'label': 'Red rock lobster New Zealand area CRA5',
  'value': 'RROCKLOBSTERCRA5'},
 {'label': 'Snow Crab Division 2J', 'value': 'SNOWCRAB2J'},
 {'label': 'Vermilion snapper Gulf of Mexico', 'value': 'VSNAPGM'},
 {'label': 'Sprat Black Sea', 'value': 'SPRBLKGSA29'},
 {'label': 'Argentine hake Northern Argentina', 'value': 'ARGHAKENARG'},
 {'label': 'Croaker West Africa Subgroup 3', 'value': 'CROAKSPPWASG3'},
 {'label': 'Tilefish Southern Atlantic coast', 'value': 'TILESATLC'},
 {'label': 'Bocaccio Southern Pacific Coast', 'value': 'BOCACCSPCOAST'},
 {'label': 'Snow crab Bering Sea', 'value': 'SNOWCRABBS'},
 {'label': 'Herring ICES VIa-VIIb-VIIc', 'value': 'HERRVIaVIIbc'},
 {'label': 'Sea scallop Georges Bank and Mid-Atlantic Bight',
  'value': 'SCALL5ZMAB'},
 {'label': 'Bigeye tuna Western Pacific Ocean', 'value': 'BIGEYEWPO'},
 {'label': 'Lingcod Northern Pacific Coast', 'value': 'LINGCODNPCOAST'},
 {'label': 'Blue marlin Pacific Ocean', 'value': 'BMARLINPAC'},
 {'label': 'Yellowtail rockfish Northern Pacific Coast',
  'value': 'YTROCKNPCOAST'},
 {'label': 'New Zealand abalone species New Zealand Area PAU 5B',
  'value': 'PAUAPAU5B'},
 {'label': 'Mackerel ICES Northeast Atlantic', 'value': 'MACKNEICES'},
 {'label': 'Albacore tuna North Atlantic', 'value': 'ALBANATL'},
 {'label': 'Spanish mackerel Gulf of Mexico', 'value': 'SPANMACKGM'},
 {'label': 'Witch Flounder NAFO-5Y', 'value': 'WITFLOUN5Y'},
 {'label': 'Swordfish North Pacific', 'value': 'SWORDNPAC'},
 {'label': 'Patagonian toothfish South Africa Subantarctic Prince Edward Islands',
  'value': 'PTOOTHFISHPEI'},
 {'label': 'Megrim ICES VIIIc-IXa', 'value': 'MEG8c9a'},
 {'label': 'Finetooth shark Atlantic', 'value': 'FTOOTHSHARATL'},
 {'label': 'Pacific cod Hecate Strait', 'value': 'PCODHS'},
 {'label': 'Greenland halibut NAFO 23KLMNO', 'value': 'GHAL23KLMNO'},
 {'label': 'Peruvian anchoveta North-Central Peru', 'value': 'PANCHPERUNC'},
 {'label': 'common European sole ICES VIId', 'value': 'SOLEVIId'},
 {'label': 'Greater amberjack Gulf of Mexico', 'value': 'GRAMBERGM'},
 {'label': 'Atlantic cod North Sea', 'value': 'CODNS'},
 {'label': 'Splitnose Rockfish Pacific Coast', 'value': 'SNROCKPCOAST'},
 {'label': 'Flathead sole Bering Sea and Aleutian Islands',
  'value': 'FLSOLEBSAI'},
 {'label': 'Red king crab Norton Sound', 'value': 'RKCRABNS'},
 {'label': 'common European sole ICES Kattegat and Skagerrak',
  'value': 'SOLEIIIa'},
 {'label': 'Yellowedge grouper Gulf of Mexico', 'value': 'YEGROUPGM'},
 {'label': 'Red seabream East China Sea', 'value': 'RBRMECS'},
 {'label': 'New Zealand ling New Zealand Areas LIN 3 and 4',
  'value': 'NZLINGLIN3-4'},
 {'label': 'Red rock lobster New Zealand area CRA4',
  'value': 'RROCKLOBSTERCRA4'},
 {'label': 'Bonnethead shark Atlantic', 'value': 'BHEADSHARATL'},
 {'label': 'Herring Iceland (Summer spawners)', 'value': 'HERRIsum'},
 {'label': 'Northern rock sole Eastern Bering Sea and Aleutian Islands',
  'value': 'NRSOLEEBSAI'},
 {'label': 'Sea scallop Georges Bank', 'value': 'SCALLGB'},
 {'label': 'Starry flounder Southern Pacific Coast',
  'value': 'STFLOUNSPCOAST'},
 {'label': 'Black Foot Paua NZ North PAUA5A', 'value': 'PAUANPAU5A'},
 {'label': 'Red snapper Gulf of Mexico', 'value': 'RSNAPGM'},
 {'label': 'Snow Crab Division 3Ps', 'value': 'SNOWCRAB3Ps'},
 {'label': 'Silver hake Gulf of Maine / Northern Georges Bank',
  'value': 'SHAKEGOMNGB'},
 {'label': 'Tarakihi New Zealand', 'value': 'TARAKNZ'},
 {'label': 'Arrowtooth flounder Pacific Coast', 'value': 'ARFLOUNDPCOAST'},
 {'label': 'Atlantic menhaden Atlantic', 'value': 'MENATLAN'},
 {'label': 'Winter Flounder NAFO-5Y', 'value': 'WINFLOUND5Y'},
 {'label': 'Shallow-water cape hake South Africa', 'value': 'CHAKESA'},
 {'label': 'Haddock ICES VIIb-k', 'value': 'HADVIIb-k'},
 {'label': 'Pacific Geoduck Washington', 'value': 'PGEODWA'},
 {'label': 'Bobo croaker West Africa Subgroup 1', 'value': 'BCROAKWASG1'},
 {'label': 'Pollock ICES IIIa, VI and North Sea', 'value': 'POLLNS-VI-IIIa'},
 {'label': 'Smooth Oreo East Pukaki Rise', 'value': 'SMOOTHOREOEPR'},
 {'label': 'Pollock NAFO-5YZ', 'value': 'POLL5YZ'},
 {'label': 'Orange roughy New Zealand Mid East Coast',
  'value': 'OROUGHYNZMEC'},
 {'label': 'Black rockfish Northern Pacific Coast',
  'value': 'BLACKROCKNPCOAST'},
 {'label': 'Winter Flounder NAFO-5Z', 'value': 'WINFLOUN5Z'},
 {'label': 'Pacific herring Straight of Georgia', 'value': 'HERRSOG'},
 {'label': 'Chilean Herring Chile Region V-X', 'value': 'CHERRCHVX'},
 {'label': 'Scup Atlantic Coast', 'value': 'SCUPNWATLC'},
 {'label': 'Coastal Shrimp West Africa', 'value': 'CSHRIMPWA'},
 {'label': 'Pacific saury Northwest Pacific', 'value': 'SAURNWPAC'},
 {'label': 'Anchovy kilka Caspian Sea', 'value': 'ANCHOVYKILKACS'},
 {'label': 'Whiting ICES VIa', 'value': 'WHITVIa'},
 {'label': 'Tilefish Mid-Atlantic Coast', 'value': 'TILEMATLC'},
 {'label': 'Round herring Tsushima Strait', 'value': 'RHERRTSST'},
 {'label': 'Bigeye Grunt West Africa Subgroup 2', 'value': 'BGRUNTWASG2'},
 {'label': 'Turbot Black Sea', 'value': 'TURBLKGSA29'},
 {'label': 'Black cardinalfish East coast of North Island',
  'value': 'BKCDLFENI'},
 {'label': 'New Zealand ling Western half of Southeast Australia',
  'value': 'NZLINGWSE'},
 {'label': 'Deepwater Cardinalfish Chile', 'value': 'SBREAMCH'},
 {'label': 'Red Pandora West Africa Subgroup 2', 'value': 'RPANDWASG2'},
 {'label': 'Red rock lobster New Zealand area CRA8',
  'value': 'RROCKLOBSTERCRA8'},
 {'label': 'Redfish species NAFO 3LN', 'value': 'REDFISHSPP3LN'},
 {'label': 'Scampi Wairapa/Hawke Bay', 'value': 'SCMPWHB'},
 {'label': 'Pacific cod West Coast of Vancouver Island',
  'value': 'PCODWCVANI'},
 {'label': 'Longfin inshore squid Atlantic Coast', 'value': 'LISQUIDATLC'},
 {'label': 'Spanish mackerel Southern Atlantic Coast',
  'value': 'SPANMACKSATLC'},
 {'label': 'Snow crab Southern Gulf of St. Lawrence', 'value': 'SNOWCRABSGSL'},
 {'label': 'Atlantic cod Baltic Areas 22 and 24', 'value': 'CODBA2224'},
 {'label': 'Pollock NAFO-4VWX5', 'value': 'POLL4VWX5'},
 {'label': 'Atlantic croaker Mid-Atlantic Coast', 'value': 'ATLCROAKMATLC'},
 {'label': 'Jack mackerel Pacific Coast of Japan', 'value': 'JMACKPJPN'},
 {'label': 'Herring ICES 22-24-IIIa', 'value': 'HERR2224IIIa'},
 {'label': 'Nylon Shrimp Chile', 'value': 'NSHRIMPCH'},
 {'label': 'Smooth oreo West end of Chatham Rise', 'value': 'SMOOTHOREOWECR'},
 {'label': 'Herring NAFO 4T spring spawners', 'value': 'HERR4TSP'},
 {'label': 'Threadfin West Africa Subgroup 1', 'value': 'THREADWASG1'},
 {'label': 'Haddock Irish Sea', 'value': 'HADIS'},
 {'label': 'Greenland turbot Bering Sea and Aleutian Islands',
  'value': 'GHALBSAI'},
 {'label': 'Seabream West Africa Subgroup 1', 'value': 'BRMSPPWASG1'},
 {'label': 'Chub mackerel Pacific Coast of Japan', 'value': 'CMACKPJPN'},
 {'label': 'Northern shortfin squid Northwestern Atlantic Coast',
  'value': 'ILLEXNWATLC'},
 {'label': 'Red seabream Inland Sea of Japan (West)', 'value': 'RBRMSETOW'},
 {'label': 'Pacific herring Queen Charlotte Islands', 'value': 'HERRQCI'},
 {'label': 'Southern Sardine Chile', 'value': 'SSARDCH'},
 {'label': 'Blue Whiting Chile', 'value': 'BWHITCH'},
 {'label': 'Olive flounder Pacific Ocean', 'value': 'OFLOUNPAC'},
 {'label': 'New Zealand snapper New Zealand Area 8', 'value': 'NZSNAPNZ8'},
 {'label': 'Arrowtooth flounder Gulf of Alaska', 'value': 'ARFLOUNDGA'},
 {'label': 'Blue rockfish California', 'value': 'BLUEROCKCAL'},
 {'label': 'common gemfish Southeast Australia', 'value': 'GEMFISHSE'},
 {'label': 'Shortspine thornyhead Pacific Coast', 'value': 'SSTHORNHPCOAST'},
 {'label': 'Orange Rough Chile', 'value': 'OROUGHYCH'},
 {'label': 'Red rock lobster New Zealand area CRA1',
  'value': 'RROCKLOBSTERCRA1'},
 {'label': 'Blackgill rockfish  Pacific Coast', 'value': 'BGROCKPCOAST'},
 {'label': 'Southern bluefin tuna Southern Oceans', 'value': 'SBT'},
 {'label': 'Northern rockfish Gulf of Alaska', 'value': 'NROCKGA'},
 {'label': 'European Plaice ICES VIIf-g', 'value': 'PLAICCELT'},
 {'label': 'Greenstriped rockfish Pacific Coast', 'value': 'GRNSTROCKPCOAST'},
 {'label': 'Walleye pollock Eastern Bering Sea', 'value': 'WPOLLEBS'},
 {'label': 'Yellow sea bream Sea of Japan', 'value': 'BRMSOJ'},
 {'label': 'Scampi Bay of Plenty', 'value': 'SCMPBP'},
 {'label': 'Anchovy South of Sicily', 'value': 'ANCHMEDGSA16'},
 {'label': 'Black rockfish Southern Pacific Coast',
  'value': 'BLACKROCKSPCOAST'},
 {'label': 'Haddock West of Scotland', 'value': 'HADVIa'},
 {'label': 'Red seabream Inland Sea of Japan (East)', 'value': 'RBRMSETOE'},
 {'label': 'Pacific herring West Coast of Vancouver Island',
  'value': 'HERRWCVANI'},
 {'label': 'Yellowtail Snapper Southern Atlantic Coast and Gulf of Mexico',
  'value': 'YTSNAPSATLCGM'},
 {'label': 'Large-eye Dentex West Africa Subgroup 3', 'value': 'LDENTWASG3'},
 {'label': 'Peruvian Anchoveta South Chile', 'value': 'PANCHSCH'},
 {'label': 'Blue mackerel Pacific Coast of Japan', 'value': 'BMACKPJPN'},
 {'label': 'Anchovy West Africa', 'value': 'ANCHOWA'},
 {'label': 'Sardine West Africa Zone C', 'value': 'SARDWAZC'},
 {'label': 'Atlantic cod Baltic Areas 25-32', 'value': 'CODBA2532'},
 {'label': 'New Zealand ling New Zealand Area LIN 7WC - WCSI',
  'value': 'NZLINGLIN7WC'},
 {'label': 'Atlantic cod NAFO 3Pn4RS', 'value': 'COD3Pn4RS'},
 {'label': 'Spiny Dogfish Black Sea', 'value': 'SDOGBLKGSA29'},
 {'label': 'Swordfish South Atlantic', 'value': 'SWORDSATL'},
 {'label': 'Canary rockfish Pacific Coast', 'value': 'CROCKPCOAST'},
 {'label': 'Yellowfin sole Bering Sea and Aleutian Islands',
  'value': 'YSOLEBSAI'},
 {'label': 'Southern spiny lobster South Africa South coast',
  'value': 'SSLOBSTERSASC'},
 {'label': 'Deepwater Rose Shrimp West Africa', 'value': 'DRSHRIMPWA'},
 {'label': 'Red rock lobster New Zealand area CRA7',
  'value': 'RROCKLOBSTERCRA7'},
 {'label': 'American lobster Gulf of Maine', 'value': 'LOBSTERGOM'},
 {'label': 'Pollock Faroe Plateau', 'value': 'POLLFAPL'},
 {'label': 'Winter Flounder Southern New England-Mid Atlantic',
  'value': 'WINFLOUNSNEMATL'},
 {'label': 'Black Foot Paua NZ South PAUA5A', 'value': 'PAUASPAU5A'},
 {'label': 'Atlantic butterfish Gulf of Maine / Cape Hatteras',
  'value': 'BUTTERGOMCHATT'},
 {'label': 'Pacific halibut North Pacific', 'value': 'PHALNPAC'},
 {'label': 'Cowcod Southern California', 'value': 'COWCODSCAL'},
 {'label': 'Sandeel North Sea Area 1', 'value': 'SEELNSSA1'},
 {'label': 'Blue king crab Saint Matthews Island', 'value': 'BKINGCRABSMI'},
 {'label': 'European Plaice North Sea', 'value': 'PLAICNS'},
 {'label': 'King mackerel Gulf of Mexico', 'value': 'KMACKGM'},
 {'label': 'California scorpionfish Southern California',
  'value': 'CALSCORPSCAL'},
 {'label': 'Whiting Black Sea', 'value': 'WHITBLKGSA29'},
 {'label': 'Gopher rockfish Southern Pacific Coast', 'value': 'GOPHERSPCOAST'},
 {'label': 'Canary rockfish West Coast of Vancouver Island and Straight of Georgia and Queen Charlotte Islands',
  'value': 'CROCKWCVANISOGQCI'},
 {'label': 'Walleye Pollock Navarinsky', 'value': 'WPOLLNAVAR'},
 {'label': 'Blue king crab Pribilof Islands', 'value': 'BKINGCRABPI'},
 {'label': 'Atlantic herring Northwestern Atlantic Coast',
  'value': 'HERRNWATLC'},
 {'label': 'Petrale sole Pacific Coast', 'value': 'PSOLEPCOAST'},
 {'label': 'Octopus West Africa', 'value': 'OCTOWA'},
 {'label': 'Monkfish Southern Georges Bank / Mid-Atlantic',
  'value': 'MONKSGBMATL'},
 {'label': 'Black Bellied Angler Malta Island and South of Sicily',
  'value': 'ANGLMEDGSA15-16'},
 {'label': 'Peruvian Anchoveta Chile Region V-X', 'value': 'PANCHCHVX'},
 {'label': 'Anchovy ICES VIII', 'value': 'ANCHOBAYB'},
 {'label': 'Pacific cod Gulf of Alaska', 'value': 'PCODGA'},
 {'label': 'Walleye pollock Western Bering Sea', 'value': 'WPOLLWBS'},
 {'label': 'Chub Mackerel West Africa', 'value': 'CMACKWA'},
 {'label': 'Red rock lobster New Zealand area CRA2',
  'value': 'RROCKLOBSTERCRA2'},
 {'label': 'Grey Grunt West Africa Subgroup 1', 'value': 'GGRUNTWASG1'},
 {'label': 'Gag Gulf of Mexico', 'value': 'GAGGM'},
 {'label': 'Southern blue whiting Southern Argentina', 'value': 'SBWHITARGS'},
 {'label': 'Norway Lobster Balearic Island', 'value': 'NEPHMEDGSA5'},
 {'label': 'Smooth Oreo Bounty Plateau', 'value': 'SMOOTHOREOBP'},
 {'label': 'Atlantic cod NAFO 3Ps', 'value': 'COD3Ps'},
 {'label': 'Weakfish Atlantic Coast', 'value': 'WEAKFISHATLC'},
 {'label': 'West coast rock lobster South Africa Area 8',
  'value': 'CRLOBSTERSA8'},
 {'label': 'American lobster Southern New England', 'value': 'LOBSTERSNE'},
 {'label': 'Abalone South Africa', 'value': 'SAABALONESA'},
 {'label': 'Tanner crab Bering Sea and Aleutian Islands',
  'value': 'TANNERCRABBSAI'},
 {'label': 'Japanese anchovy Pacific Coast of Japan', 'value': 'JANCHOPJPN'},
 {'label': 'Atlantic cod NAFO 4VsW', 'value': 'COD4VsW'},
 {'label': 'Striped bass Gulf of Maine / Cape Hatteras',
  'value': 'STRIPEDBASSGOMCHATT'},
 {'label': 'Smooth Oreo Southland', 'value': 'SMOOTHOREOSLD'},
 {'label': 'Sablefish Pacific Coast of Canada', 'value': 'SABLEFPCAN'},
 {'label': 'Snowy grouper Southern Atlantic coast', 'value': 'SNOWGROUPSATLC'},
 {'label': 'New Zealand ling New Zealand Areas LIN 5 and 6',
  'value': 'NZLINGLIN5-6'},
 {'label': 'White shrimp Gulf of Mexico', 'value': 'WSHRIMPGM'},
 {'label': 'Herring NAFO 4T fall spawners', 'value': 'HERR4TFA'},
 {'label': 'Japanese jack mackerel Tsushima Strait', 'value': 'JMACKTSST'},
 {'label': 'Pacific Ocean perch Eastern Bering Sea and Aleutian Islands',
  'value': 'PERCHEBSAI'},
 {'label': 'Catfish West Africa Subgroup 1', 'value': 'CATWASG1'},
 {'label': 'Pink shrimp Gulf of Mexico', 'value': 'PINKSHRIMPGM'},
 {'label': 'Arrowtooth flounder Bering Sea and Aleutian Islands',
  'value': 'ARFLOUNDBSAI'},
 {'label': 'Cabezon Southern California', 'value': 'CABEZSCAL'},
 {'label': 'Herring ICES VIa', 'value': 'HERRVIa'},
 {'label': 'Red porgy Southern Atlantic coast', 'value': 'RPORGYSATLC'},
 {'label': 'Yellowfin tuna Eastern Pacific', 'value': 'YFINEPAC'},
 {'label': 'Red deepsea crab Northwestern Atlantic',
  'value': 'RDEEPCRABNWATL'},
 {'label': 'Sandbar shark Atlantic', 'value': 'SBARSHARATL'},
 {'label': 'Bigeye tuna Central Western Pacific', 'value': 'BIGEYECWPAC'},
 {'label': 'Bonga West Africa', 'value': 'BONGAWA'},
 {'label': 'Seabream West Africa Subgroup 3', 'value': 'BRMSPPWASG3'},
 {'label': 'Sablefish Eastern Bering Sea / Aleutian Islands / Gulf of Alaska',
  'value': 'SABLEFEBSAIGA'},
 {'label': 'White marlin Atlantic', 'value': 'WMARLINATL'},
 {'label': 'Blue Crab Chesapeake Bay', 'value': 'BCRABCHESB'},
 {'label': 'European Plaice ICES IIIa', 'value': 'PLAICIIIa'},
 {'label': 'Deep-water Rose Shrimp Southern Adriatic Sea',
  'value': 'RSHRMPMEDGSA18'},
 {'label': 'Norway pout North Sea', 'value': 'NPOUTNS'},
 {'label': 'Orange roughy Southeast Australia', 'value': 'OROUGHYSE'},
 {'label': 'Chilean jack mackerel Chilean EEZ and offshore',
  'value': 'CHTRACCH'},
 {'label': 'Atlantic cod Kattegat', 'value': 'CODKAT'},
 {'label': 'Atlantic cod Irish Sea', 'value': 'CODIS'},
 {'label': 'Deep-water Rose Shrimp Northern Spain', 'value': 'PSHRMPMEDGSA6'},
 {'label': 'South Pacific Hake Chile', 'value': 'SPHAKECH'},
 {'label': 'Pacific ocean perch Gulf of Alaska', 'value': 'POPERCHGA'},
 {'label': 'Whiting ICES VIIe-k', 'value': 'WHITVIIek'},
 {'label': 'American Plaice NAFO-3M', 'value': 'AMPL3M'},
 {'label': 'Herring ICES 28', 'value': 'HERRRIGA'},
 {'label': 'Brown shrimp Gulf of Mexico', 'value': 'BRNSHRIMPGM'},
 {'label': 'Blue Warehou Western half of Southeast Australia',
  'value': 'WAREHOUWSE'},
 {'label': 'Argentine anchoita Northern Argentina', 'value': 'ARGANCHONARG'},
 {'label': 'Spiny dogfish Atlantic Coast', 'value': 'SDOGATLC'},
 {'label': 'Haddock Georges Bank', 'value': 'HADGB'},
 {'label': 'Swordfish Eastern Pacific', 'value': 'SWORDEPAC'},
 {'label': 'Red Seabream Alboran Sea', 'value': 'RBRMMEDGSA1-3'},
 {'label': 'Atlantic cod Iceland', 'value': 'CODICE'},
 {'label': 'King mackerel Southern Atlantic Coast', 'value': 'KMACKSATLC'},
 {'label': 'Golden Redfish Northeast Arctic', 'value': 'GOLDREDNEAR'},
 {'label': 'Walleye pollock Gulf of Alaska', 'value': 'WPOLLGA'},
 {'label': 'Swordfish North Atlantic', 'value': 'SWORDNATL'},
 {'label': 'Black oreo West end of Chatham Rise', 'value': 'BLACKOREOWECR'},
 {'label': 'Atlantic cod NAFO 2J3KL', 'value': 'COD2J3KL'},
 {'label': 'Redfish species NAFO 23K', 'value': 'REDFISHSPP23K'},
 {'label': 'Deep-water cape hake South Africa', 'value': 'DEEPCHAKESA'},
 {'label': 'New Zealand abalone species New Zealand Area PAU 5D',
  'value': 'PAUAPAU5D'},
 {'label': 'Blacktip shark Atlantic', 'value': 'BTIPSHARATL'},
 {'label': 'Sardine Northern Adriatic Sea', 'value': 'SARDMEDGSA17'},
 {'label': 'Greenspotted rockfish Pacific Coast North',
  'value': 'GRSPROCKNCAL'},
 {'label': 'Anchovy Gulf of Lions', 'value': 'ANCHMEDGSA7'},
 {'label': 'Pacific sardine Pacific Coast', 'value': 'SARDPCOAST'},
 {'label': 'Sea Mullet Queensland and New South Wales', 'value': 'MULLQNSW'},
 {'label': 'Whiting Black Sea', 'value': 'WHITBLACK'},
 {'label': 'Windowpane Southern New England-Mid Atlantic',
  'value': 'WINDOWSNEMATL'},
 {'label': 'Albacore tuna South Pacific Ocean', 'value': 'ALBASPAC'},
 {'label': 'Catfish West Africa Subgroup 3', 'value': 'CATWASG3'},
 {'label': 'Benguela Hake West Africa Subgroup 3', 'value': 'BHAKEWASG3'},
 {'label': 'Pacific herring Central Coast', 'value': 'HERRCC'},
 {'label': 'South Hake Chile', 'value': 'SOUTHHAKECH'},
 {'label': 'South american pilchard Pacific Coast of Japan',
  'value': 'PILCHPJPN'},
 {'label': 'Pacific chub mackerel Pacific Coast', 'value': 'CMACKPCOAST'},
 {'label': 'Patagonian grenadier Chile', 'value': 'PATGRENADIERCH'},
 {'label': 'European Plaice Irish Sea', 'value': 'PLAICIS'},
 {'label': 'Atlantic Halibut NAFO-5YZ', 'value': 'ATHAL5YZ'},
 {'label': 'Yellowfin tuna Atlantic', 'value': 'YFINATL'},
 {'label': 'Atlantic cod Gulf of Maine', 'value': 'CODGOM'},
 {'label': 'Grey Grunt West Africa Subgroup 3', 'value': 'GGRUNTWASG3'},
 {'label': 'Snow Crab Division 3K', 'value': 'SNOWCRAB3K'},
 {'label': 'Horse Mackerel Chile', 'value': 'HMACKCH'},
 {'label': 'Sandeel North Sea Area 3', 'value': 'SEELNSSA3'},
 {'label': 'Darkblotched rockfish Pacific Coast', 'value': 'DKROCKPCOAST'},
 {'label': 'Croaker West Africa Subgroup 1', 'value': 'CROAKSPPWASG1'},
 {'label': 'New Zealand abalone species New Zealand Area PAU 7',
  'value': 'PAUAPAU7'},
 {'label': 'Starry flounder Northern Pacific Coast',
  'value': 'STFLOUNNPCOAST'},
 {'label': 'Olive flounder East China Sea', 'value': 'OFLOUNECS'},
 {'label': 'Ocean quahog Atlantic Coast', 'value': 'QUAHATLC'},
 {'label': 'Cunene Horse Mackerel West Africa', 'value': 'CHMACKWA'},
 {'label': 'Bigeye Grunt West Africa Subgroup 3', 'value': 'BGRUNTWASG3'},
 {'label': 'False Scad West Africa', 'value': 'FSCADWA'},
 {'label': 'Peruvian Anchoveta North Chile', 'value': 'PANCHNCH'},
 {'label': 'Black sea bass Mid-Atlantic Coast', 'value': 'BSBASSMATLC'},
 {'label': 'Red grouper South Atlantic', 'value': 'RGROUPSATL'},
 {'label': 'Albacore tuna Mediterranean', 'value': 'ALBAMED'},
 {'label': 'Seabream West Africa Subgroup 2', 'value': 'BRMSPPWASG2'},
 {'label': 'Snow Crab Division 3NO', 'value': 'SNOWCRAB3NO'},
 {'label': 'Blue mackerel East China Sea', 'value': 'BMACKECS'},
 {'label': 'Alaska plaice Bering Sea and Aleutian Islands',
  'value': 'ALPLAICBSAI'},
 {'label': 'Bigeye tuna Eastern Pacific', 'value': 'BIGEYEEPAC'},
 {'label': 'Deepwater Redfish Northeast Arctic', 'value': 'REDDEEPI-II'},
 {'label': 'Atlantic cod West of Scotland', 'value': 'CODVIa'},
 {'label': 'Fourspotted megrim ICES VIIIc-IXa', 'value': 'FMEG8c9a'},
 {'label': 'White hake Scotian Shelf, Bay of Fundy and Georges Bank',
  'value': 'WHAKE4VWX5'},
 {'label': 'New Zealand ling New Zealand Area LIN 72', 'value': 'NZLINGLIN72'},
 {'label': 'common European sole Irish Sea', 'value': 'SOLEIS'},
 {'label': 'Rougheye rockfish Gulf of Alaska', 'value': 'REYEROCKGA'},
 {'label': 'Yellowtail Flounder NAFO 3LNO', 'value': 'YELL3LNO'},
 {'label': 'Tasmanian giant crab Tasmania', 'value': 'TASGIANTCRABTAS'},
 {'label': 'Snapper Southern Gulf St. Vincent', 'value': 'SNAPSAUSSGSV'},
 {'label': 'Atlantic cod NAFO 4X', 'value': 'COD4X'},
 {'label': 'Haddock NAFO-4X5Y', 'value': 'HAD4X5Y'},
 {'label': 'Pacific cod Bering Sea and Aleutian Islands', 'value': 'PCODBSAI'},
 {'label': 'Pacific herring Prince William Sound', 'value': 'HERRPWS'},
 {'label': 'Silver hake Southern Georges Bank / Mid-Atlantic',
  'value': 'SHAKESGBMATL'},
 {'label': 'Blue Grenadier Southeast Australia', 'value': 'BGRDRSE'},
 {'label': 'West coast rock lobster South Africa Area 7',
  'value': 'CRLOBSTERSA7'},
 {'label': 'Yellownose Skate Chile', 'value': 'YNOSESKACH'},
 {'label': 'Longnose skate Pacific Coast', 'value': 'LNOSESKAPCOAST'},
 {'label': 'Yellowtail Flounder Southern New England-Mid Atlantic',
  'value': 'YELLSNEMATL'},
 {'label': 'Australian salmon New Zealand', 'value': 'AUSSALMONNZ'},
 {'label': 'Northern rockfish Bering Sea and Aleutian Islands',
  'value': 'NROCKBSAI'},
 {'label': 'Black Oreo Pukaki Rise', 'value': 'BLACKOREOPR'},
 {'label': 'Patagonian Toothfish Chile', 'value': 'PTOOTHFISHCH'},
 {'label': 'Atlantic Cod Celtic Sea', 'value': 'CODVIIek'},
 {'label': 'Threadfin West Africa Subgroup 3', 'value': 'THREADWASG3'},
 {'label': 'Redfish species NAFO 1', 'value': 'REDFISHSPP1'},
 {'label': 'Capelin Iceland', 'value': 'CAPEICE'},
 {'label': 'Atlantic cod Faroe Plateau', 'value': 'CODFAPL'},
 {'label': 'Japanese Spanish mackerel Inland Sea of Japan',
  'value': 'SPANMACKSETO'},
 {'label': 'Shortbelly rockfish Pacific Coast', 'value': 'SBELLYROCKPCOAST'},
 {'label': 'Tiger flathead Southeast Australia', 'value': 'TIGERFLATSE'},
 {'label': 'American Plaice NAFO-5YZ', 'value': 'AMPL5YZ'},
 {'label': 'Cabezon Oregon Coast', 'value': 'CABEZORECOAST'},
 {'label': 'Black sea bass South Atlantic', 'value': 'BSBASSSATL'},
 {'label': 'American Plaice NAFO-23K', 'value': 'AMPL23K'},
 {'label': 'Chub mackerel Tsushima Strait', 'value': 'CMACKTSST'},
 {'label': 'Orange roughy Cascade Plateau', 'value': 'OROUGHYCASCADE'},
 {'label': 'Bigeye tuna Atlantic', 'value': 'BIGEYEATL'},
 {'label': 'Striped marlin Northeast Pacific', 'value': 'STMARLINNEPAC'},
 {'label': 'Swordfish Mediterranean Sea', 'value': 'SWORDMED'},
 {'label': 'White hake Georges Bank / Gulf of Maine', 'value': 'WHAKEGBGOM'},
 {'label': 'Blue marlin Atlantic', 'value': 'BMARLINATL'},
 {'label': 'European Plaice ICES VIId', 'value': 'PLAIC7d'},
 {'label': 'common European sole Celtic Sea', 'value': 'SOLECS'},
 {'label': 'Hake Northeast Atlantic North', 'value': 'HAKENRTN'},
 {'label': 'Red snapper Southern Atlantic coast', 'value': 'RSNAPSATLC'},
 {'label': 'Round Sardinella West Africa', 'value': 'RSARDINWA'},
 {'label': 'Spottail Mantis Shrimp Northern Adriatic Sea',
  'value': 'SMSHRMPMEDGSA17'},
 {'label': 'Greenland halibut NAFO 01ABCDEF', 'value': 'GHAL01ABCDEF'},
 {'label': 'Skipjack tuna Eastern Atlantic', 'value': 'SKJEATL'},
 {'label': 'Pacific hake Pacific Coast', 'value': 'PHAKEPCOAST'},
 {'label': 'Walleye pollock Aleutian Islands', 'value': 'WPOLLAI'},
 {'label': 'Shortfin mako Nothwest Pacific Ocean', 'value': 'SFMAKONWPAC'},
 {'label': 'Pacific herring Prince Rupert District', 'value': 'HERRPRD'},
 {'label': 'Snapper Southern Spencer Gulf', 'value': 'SNAPSAUSSSG'},
 {'label': 'Cabezon Northern California', 'value': 'CABEZNCAL'},
 {'label': 'Skipjack tuna Central Western Pacific', 'value': 'SKJCWPAC'},
 {'label': 'Antarctic toothfish Ross Sea', 'value': 'ATOOTHFISHRS'},
 {'label': 'common European sole Western English Channel',
  'value': 'SOLEVIIe'},
 {'label': 'Haddock NAFO-5Y', 'value': 'HAD5Y'},
 {'label': 'Redfish species NAFO 3Pn4RSTVn', 'value': 'REDFISHSPP3Pn4RSTVn'},
 {'label': 'common European sole North Sea', 'value': 'SOLENS'},
 {'label': 'Haddock Rockall Bank', 'value': 'HADROCK'},
 {'label': 'Argentine hake Southern Argentina', 'value': 'ARGHAKESARG'},
 {'label': 'Trevally New Zealand Areas TRE 7', 'value': 'TREVALLYTRE7'}
 ];


function doGraph(data){
  console.log("doing graph...", data)

  var year_array = new Array();
  var B_array = new Array();



  // for (var key in data.year) { 
  //   year_array.push(data.year[key]);
  // }

  
  for (var key in data['B/Bmsytouse']) { 

          v = data['B/Bmsytouse'][key]
          if (v!=null) {
            B_array.push([data.year[key],v]); 
          }
  }

  // console.log(year_array);
  console.log(B_array);


  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 600 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom;

  //   var x = d3.scale.linear()
  //   // time.scale
  //     .range([0, width]);

  //   var y = d3.scale.linear()
  //     .range([height, 0]);

  //   var xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("bottom")
  //     .tickFormat(d3.format("d"))
  //     .tickSize(2);


  //   var yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("left")
  //     .ticks(5)
  //     .tickSize(2);

  //   var line = d3.svg.line()
  //     .x(function(d) { return x(d[0]); })
  //     .y(function(d) { return y(d[1]); });

  //   var svg = d3.select("body").append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  //       .style("font-size","12px");


  //   d3.csv("yft_short.csv", type, function(error, data) {
  //     if (error) throw error;
  //     console.log("data", data)
  //     x.domain(d3.extent(data, function(d) { return d[0]; }));
  //     y.domain(d3.extent(data, function(d) { return d[1]; }));

  //     svg.append("g")
  //       .attr("class", "x axis")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(xAxis);

  //     svg.append("g")
  //       .attr("class", "y axis")
  //       .call(yAxis)

  //     .append("text")
  //       .attr("transform", "rotate(-90)")
  //       .attr("y", 4)
  //       .attr("dy", ".61em")
  //       .style("text-anchor", "end")
  //       .text("F/Fmsy");

  //     svg.append("path")
  //       .datum(data)
  //       .attr("class", "line")
  //       .attr("d", line);
  //   });

    // function type(d) {
    //   d.year = d.year;
    //   d.ffmsy = +d.ffmsy;
    //   return d;
    // }

  var x = d3.scale.linear()
    .range([0, width]);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.format("d"))
    .tickSize(2);


  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5)
    .tickSize(2);

  var line = d3.svg.line()
    .x(function(d) { 
      return x(d[0]); })
    .y(function(d) {
      return y(d[1])
    });


  // TODO: Cannot select with d3 until after page load 
  //  using $( function() { ... do d3 stuff here ... })

  var svg = d3.select( "#viz" ).append( "svg" )
        .attr( "width" , width + margin.left + margin.right )
        .attr( "height" , height + margin.top + margin.bottom )
        .append( "g" )
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style("font-size","12px");


    // console.log("year", data.year);
    // console.log("B", data['B/Bmsytouse'])

      x.domain(d3.extent(B_array, function(d) { return d[0]; }));
      y.domain(d3.extent(B_array, function(d) { return d[1]; }));

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)

      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 4)
        .attr("dy", ".61em")
        .style("text-anchor", "end")
        .text("B/Bmsy");

        console.log("x", x.domain)

      svg.append("path")
        .datum(B_array)
        .attr("class", "line")
        .attr("d", line);
    

    // function type(d) {
    //   d.year = d.year;
    //   d['B/Bmsytouse'] = d['B/Bmsytouse'];
    //   return d;
    // }


  };

  $(function() {
    $( "#tags" ).autocomplete({
      source: availableFish,
       focus: function( event, ui ) {
        $( "#tags" ).val( ui.item.label );
        return false;
      },
      select: function(event, ui){
        $.ajax({
          type: "POST",
          url: '/api/searchbyfish',
          contentType: 'application/json;charset=UTF-8',
          data: JSON.stringify(ui, null, '\t'),
          success: function(data) { 
            var dataObj = JSON.parse(data)
            doGraph(dataObj)
          }
        });
      }
    });
  });




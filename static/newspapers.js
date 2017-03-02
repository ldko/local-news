var sampleData = [
    {
        "city": "Ann Arbor, MI", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Heading into second year under Harbaugh, Wolverines embracing higher standard"
            }, 
            {
                "data": {
                    "compound": 0.7342, 
                    "neg": 0.0, 
                    "neu": 0.556, 
                    "pos": 0.444
                }, 
                "title": "Michigan delegation appears unified in support of Trump despite roll call confusion"
            }, 
            {
                "data": {
                    "compound": 0.34, 
                    "neg": 0.0, 
                    "neu": 0.625, 
                    "pos": 0.375
                }, 
                "title": "Kildee endorses Clinton's running mate"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "DONATE TO THE DAILY"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Op-ed: Fixing the income gap"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year: News"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Students of the Year"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.313, 
                    "neu": 0.687, 
                    "pos": 0.0
                }, 
                "title": "\u2018Suits\u2019 finds itself in an identity crisis in latest season"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.641, 
                    "pos": 0.359
                }, 
                "title": "Elena Hubbell: Inspiring movies for all"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "M Den provides preview of Nike product launch"
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.194, 
                    "neu": 0.625, 
                    "pos": 0.181
                }, 
                "title": "\u2018Ballers\u2019 fails to deliver on its bombastic promises in season premiere"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Madeline Nowicki: Make America Work Again?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Students could turn the tide with Michigan as a swing state"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "2016 Schefters: Several Michigan teams recover from down 2014-15 season"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Notebook: Harbaugh, Big Ten coaches address media in Chicago"
            }, 
            {
                "data": {
                    "compound": 0.6908, 
                    "neg": 0.0, 
                    "neu": 0.612, 
                    "pos": 0.388
                }, 
                "title": "\u2018Your Authority\u2019 shows how Good Charlotte's talent has yet to waver"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "School of Public Health named to national precision medicine program"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Anna Polumbo-Levy: Prioritizing self-care"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year"
            }, 
            {
                "data": {
                    "compound": 0.1779, 
                    "neg": 0.292, 
                    "neu": 0.337, 
                    "pos": 0.371
                }, 
                "title": "Op-ed: Jolly to the grave"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Abby Cole's move to basketball made official"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.753, 
                    "pos": 0.247
                }, 
                "title": "Art Fair showcases a different side of Ann Arbor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "From Mexico to Michigan"
            }, 
            {
                "data": {
                    "compound": -0.1154, 
                    "neg": 0.127, 
                    "neu": 0.873, 
                    "pos": 0.0
                }, 
                "title": "Young people rock DNC with protests, but students appear less involved"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year: Entertaiment"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.806, 
                    "pos": 0.194
                }, 
                "title": "Jacob Rich: Pok\u00e9mon Go grabbed the world by the ear \u2014 so what's next for Nintendo?"
            }, 
            {
                "data": {
                    "compound": 0.6486, 
                    "neg": 0.0, 
                    "neu": 0.569, 
                    "pos": 0.431
                }, 
                "title": "\u2018Captain Fantastic\u2019 is a brave exploration of the human condition"
            }
        ], 
        "location": {
            "lat": 42.2808256, 
            "lng": -83.7430378
        }, 
        "paper": "Michigan Daily", 
        "rank": 166793
    }, 
    {
        "city": "Ann Arbor, MI", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.162, 
                    "neu": 0.615, 
                    "pos": 0.223
                }, 
                "title": "Op-ed: RNC's 'Make America Safe Again' ignores facts on refugees"
            }, 
            {
                "data": {
                    "compound": -0.5267, 
                    "neg": 0.362, 
                    "neu": 0.638, 
                    "pos": 0.0
                }, 
                "title": "Op-ed: The danger of the RNC's tone"
            }, 
            {
                "data": {
                    "compound": -0.25, 
                    "neg": 0.303, 
                    "neu": 0.526, 
                    "pos": 0.171
                }, 
                "title": "Though imperfect, \u2018Ghostbusters\u2019 challenges its naysayers"
            }, 
            {
                "data": {
                    "compound": 0.7717, 
                    "neg": 0.0, 
                    "neu": 0.511, 
                    "pos": 0.489
                }, 
                "title": "Nike Welcome Rally celebrates new era of Michigan apparel"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "DONATE TO THE DAILY"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "From Wellesley to Washington: a chronicle of Hillary Clinton\u2019s personal style"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year: News"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Madeline Nowicki: This is for the girls"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.302, 
                    "neu": 0.698, 
                    "pos": 0.0
                }, 
                "title": "Research highlights effects of race, socioeconomic status on premature death"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Students of the Year"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.484, 
                    "pos": 0.516
                }, 
                "title": "Festival Report: Pitchfork 2016"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.722, 
                    "pos": 0.278
                }, 
                "title": "Clinton's support for Flint continues into general election"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Pokemon Go captures University and Ann Arbor communities"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.313, 
                    "neu": 0.687, 
                    "pos": 0.0
                }, 
                "title": "\u2018Suits\u2019 finds itself in an identity crisis in latest season"
            }, 
            {
                "data": {
                    "compound": -0.4019, 
                    "neg": 0.278, 
                    "neu": 0.722, 
                    "pos": 0.0
                }, 
                "title": "Michigan's role as a battleground state highlighted at DNC"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Real Madrid claims 3-2 victory over Chelsea at Michigan Stadium"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Notebook: Real Madrid prepares for contest at Michigan Stadium"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "David Mertz: Overlooking the facts is an American phenomenon"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Orion Sang: A fitting marriage"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Past meets present as Michigan corrects jacket inequality"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mike Pence swings through Michigan"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.753, 
                    "pos": 0.247
                }, 
                "title": "Art Fair showcases a different side of Ann Arbor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "From Mexico to Michigan"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photos of the Year: Entertaiment"
            }, 
            {
                "data": {
                    "compound": -0.7351, 
                    "neg": 0.36, 
                    "neu": 0.64, 
                    "pos": 0.0
                }, 
                "title": "Attorney General announces new charges against state employees involved in Flint water crisis"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.157, 
                    "neu": 0.496, 
                    "pos": 0.347
                }, 
                "title": "Nadia Karizat: The freedom that comes with vulnerability"
            }
        ], 
        "location": {
            "lat": 42.2808256, 
            "lng": -83.7430378
        }, 
        "paper": "Michigan Daily", 
        "rank": 166793
    }, 
    {
        "city": "Royal Oak, MI", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.135, 
                    "neu": 0.552, 
                    "pos": 0.313
                }, 
                "title": "Amber Alert canceled for missing Madison Heights teenager who is found safe"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sound Check: Lucius evolves more than changes on latest album"
            }, 
            {
                "data": {
                    "compound": -0.4588, 
                    "neg": 0.3, 
                    "neu": 0.7, 
                    "pos": 0.0
                }, 
                "title": "At least 105 Russian athletes banned so far"
            }, 
            {
                "data": {
                    "compound": -0.1531, 
                    "neg": 0.151, 
                    "neu": 0.849, 
                    "pos": 0.0
                }, 
                "title": "Federer to miss rest of season, including Olympics, U.S. Open"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cabrera homers, Tigers outlast Red Sox in slugfest 9-8"
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.8, 
                    "pos": 0.2
                }, 
                "title": "Sound Check: Plugged or unplugged, Peter Frampton remains ready to rock"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hotts Spots: Eastside Westside does double duty in the Clem"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Royal Oak seeks more information on civic center development proposal"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Park construction at former Royal Oak golf course could start next spring"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.795, 
                    "pos": 0.205
                }, 
                "title": "Report: Lions reaching deal with WR Anquan Boldin"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Writer\u0092s journey arrives home in \u0093Invincible Summers\u0094"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Email Newsletter Sign up"
            }, 
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.256, 
                    "neu": 0.744, 
                    "pos": 0.0
                }, 
                "title": "HOME GROWN: Japanese beetles worse than Godzilla in the garden"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.828, 
                    "pos": 0.172
                }, 
                "title": "ROHS Hall of Fame to include Flint pediatrician who blew whistle on lead in water"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Heartworm testing: What every dog owner needs to know"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Skip to Main Window"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jared Goff leads Rams\u0092 rookies into training camp"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Democrats formally nominate Hillary Clinton for president"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Family: Bring everyone together for meal time"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Tribune: BLOGS"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.314, 
                    "neu": 0.686, 
                    "pos": 0.0
                }, 
                "title": "Boy\u0092s stolen bike replaced by Farmington Hills police"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Tips for lawn maintenance"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.134, 
                    "neu": 0.464, 
                    "pos": 0.402
                }, 
                "title": "Review: Disturbed and friends show heavy rock is alive and well at DTE"
            }, 
            {
                "data": {
                    "compound": 0.2263, 
                    "neg": 0.0, 
                    "neu": 0.759, 
                    "pos": 0.241
                }, 
                "title": "DeKeyser signs six-year contract worth $30 million"
            }
        ], 
        "location": {
            "lat": 42.4894801, 
            "lng": -83.1446485
        }, 
        "paper": "Daily Tribune", 
        "rank": 866156
    }, 
    {
        "city": "Royal Oak, MI", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.656, 
                    "pos": 0.344
                }, 
                "title": "Reggie Bush eager to extend career after signing with Bills"
            }, 
            {
                "data": {
                    "compound": -0.2716, 
                    "neg": 0.149, 
                    "neu": 0.851, 
                    "pos": 0.0
                }, 
                "title": "Pat Caputo - Tigers standing pat at MLB trade deadline more risky than perceived"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Review: Jeff Beck and Buddy Guy -- masters at work at Meadow Brook"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Royal Oak park is a stage as Shakespeare returns for another season"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.724, 
                    "pos": 0.276
                }, 
                "title": "Review: Tedeschi Trucks Band\u0092s Wheels Of Soul Tour rolls at Freedom Hills"
            }, 
            {
                "data": {
                    "compound": -0.4588, 
                    "neg": 0.333, 
                    "neu": 0.667, 
                    "pos": 0.0
                }, 
                "title": "Divorce, desperation helped Gwen Stefani find \u0093Truth\u0094"
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.25, 
                    "neu": 0.517, 
                    "pos": 0.233
                }, 
                "title": "Block party marks Michigan\u0092s apparel deal with Nike"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.732, 
                    "pos": 0.268
                }, 
                "title": "US Olympic men\u0092s basketball team tops Nigeria in last tuneup"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Oakland County community calendar"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Expert to Rio athletes: \u0091Don\u0092t put your head under water\u0092"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Royal Oak museum shows the concept art of car designers behind classics"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": 0.7096, 
                    "neg": 0.0, 
                    "neu": 0.604, 
                    "pos": 0.396
                }, 
                "title": "Astrologist Rich Milostan offers August trends and psychic fair in Troy"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Royal Oak forecast changes polling places inside 2 schools"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Reviews: \u0091Hitman\u0092 Episode 3; \u0091Valkyria Chronicles Remastered\u0092"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "What you need to know about Tuesday\u0092s primary election in Oakland County"
            }, 
            {
                "data": {
                    "compound": 0.1779, 
                    "neg": 0.0, 
                    "neu": 0.779, 
                    "pos": 0.221
                }, 
                "title": "Dance class harnesses the spirit of Carnival"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Riding horseback in Hazel Park; city meets country at the track"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.371, 
                    "neu": 0.629, 
                    "pos": 0.0
                }, 
                "title": "Detroit Lions \u0097 Tempers flare as offensive line is dominated again"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Email Newsletter Sign up"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.18, 
                    "neu": 0.82, 
                    "pos": 0.0
                }, 
                "title": "Tigers trade deadline live blog \u0097 no moves made by deadline"
            }, 
            {
                "data": {
                    "compound": -0.4019, 
                    "neg": 0.278, 
                    "neu": 0.722, 
                    "pos": 0.0
                }, 
                "title": "Usain Bolt brings light to a sport in peril"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.743, 
                    "pos": 0.257
                }, 
                "title": "Buescher emerges in the fog at Pocono for 1st career Cup win"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Skip to Main Window"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Tigers stand pat at the trade deadline, as expected"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Review: Pop pairing of Demi Lovato and Nick Jonas brings a big show to the Palace"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Tribune: BLOGS"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Deal \u0091em up! 18 trades \u0097 Beltran, Lucroy, Bruce, Moore move"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MLB ROUNDUP: Duffy sets franchise K mark, as Royals shut out Rays"
            }
        ], 
        "location": {
            "lat": 42.4894801, 
            "lng": -83.1446485
        }, 
        "paper": "Daily Tribune", 
        "rank": 866156
    }, 
    {
        "city": "Mesquite, TX", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.462, 
                    "neu": 0.538, 
                    "pos": 0.0
                }, 
                "title": "Man shot dead in The Colony"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "On the air: KEOM hosts radio camps"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.791, 
                    "pos": 0.209
                }, 
                "title": "Local stars are bright at night for evening music and art series"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.556, 
                    "pos": 0.444
                }, 
                "title": "XNSP3817 - Senior Care 1x1 ALLEN"
            }, 
            {
                "data": {
                    "compound": 0.6486, 
                    "neg": 0.0, 
                    "neu": 0.602, 
                    "pos": 0.398
                }, 
                "title": "Mesquite modifies active call logs to protect its first responders"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "See homes that recently sold in Mesquite"
            }, 
            {
                "data": {
                    "compound": 0.1027, 
                    "neg": 0.0, 
                    "neu": 0.781, 
                    "pos": 0.219
                }, 
                "title": "Rowlet Animal Shelter dogs await adoption"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sit-downs only: McKinney 'restaurant row' discussion continues"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Column: Bloggin' away with words"
            }, 
            {
                "data": {
                    "compound": 0.5423, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Sunnyvale's Hawkins named honorable mention all-state"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.448, 
                    "pos": 0.552
                }, 
                "title": "Library celebrates 25th anniversary"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Flower Mound pushing forward with town hall, library projects"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Christian superheroes: Mesquite man creates unique comic book"
            }, 
            {
                "data": {
                    "compound": -0.7579, 
                    "neg": 0.481, 
                    "neu": 0.519, 
                    "pos": 0.0
                }, 
                "title": "Man charged in connection to murder in The Colony"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Frisco getting first skate park"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "TAAF Region 7 Track and Field Meet Results"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.338, 
                    "neu": 0.662, 
                    "pos": 0.0
                }, 
                "title": "Allen police warn of criminals en route to D-FW from Chicago area"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Plano rugby star named All-American"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McKinney finance director quits after 3 days on the job"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.619, 
                    "pos": 0.381
                }, 
                "title": "Out & About: Mesquite celebrates Christmas in July"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.239, 
                    "neu": 0.761, 
                    "pos": 0.0
                }, 
                "title": "Mesquite police seek a suspect involved in two shootings"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.255, 
                    "neu": 0.745, 
                    "pos": 0.0
                }, 
                "title": "Cause of house fire in Frisco under investigation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Frisco grad stars on TV show"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Column: Turning 12 into 144"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "CISD Bond Oversight Committee selected"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Two restaurants new to North Texas to open first locations in Allen"
            }, 
            {
                "data": {
                    "compound": -0.7845, 
                    "neg": 0.697, 
                    "neu": 0.303, 
                    "pos": 0.0
                }, 
                "title": "Murder suspect released on bond"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Star Local Media Home"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Biotech Companies Are Still the \"It\" Stock to Have in Your Portfolio"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters To The Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "WWII veteran to hold book signing in Carrollton"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Star Kickoff already a hit"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Tip A Cop: Mesquite, Dallas officers collect donations for Special Olympics"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.708, 
                    "pos": 0.292
                }, 
                "title": "Marlins swim team posts strong effort at regional meet"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Frisco 2nd fastest-growing city in U.S."
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.737, 
                    "pos": 0.263
                }, 
                "title": "Rodeo ready to open its new \u2018ERA\u2019 July 2"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Eye on the future: Mesquite City Council discusses I-20 development plan"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rent prices 28th highest in U.S."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rowlett resident takes checkered flag at Devil's Bowl Speedway"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Town considers moving farmers market to Parker Square"
            }, 
            {
                "data": {
                    "compound": -0.5859, 
                    "neg": 0.322, 
                    "neu": 0.545, 
                    "pos": 0.134
                }, 
                "title": "Ford Warriors in Pink, Cleaning For A Reason team up to help women battling cancer"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Showcasing their Skills: Area players look to stand out at football camps"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.335, 
                    "neu": 0.4, 
                    "pos": 0.265
                }, 
                "title": "Grand jury no bills driver responsible for The Colony double motorcycle fatality"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Carrollton woman dies while on trip with Boy Scouts"
            }, 
            {
                "data": {
                    "compound": 0.6486, 
                    "neg": 0.0, 
                    "neu": 0.485, 
                    "pos": 0.515
                }, 
                "title": "Parkland awarded for innovation in professional development"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.459, 
                    "neu": 0.541, 
                    "pos": 0.0
                }, 
                "title": "Mesquite PD seek identity of aggravated robbery suspect"
            }
        ], 
        "location": {
            "lat": 32.76679550000001, 
            "lng": -96.5991593
        }, 
        "paper": "The Mesquite News", 
        "rank": 286637
    }, 
    {
        "city": "Coppell, TX", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.833, 
                    "pos": 0.167
                }, 
                "title": "Fink finishes on top as male athlete of the year"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A whole new outlook on food"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "AP/IB art students paint with a purpose at showcase"
            }, 
            {
                "data": {
                    "compound": 0.7184, 
                    "neg": 0.0, 
                    "neu": 0.4, 
                    "pos": 0.6
                }, 
                "title": "Academic encouragement through honor roll lunch"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "College is a place to grow up, not be more coddled"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find your summer sound"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.811, 
                    "pos": 0.189
                }, 
                "title": "Mukund creates music blog to end high school with a bang"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Making a difference one dollar at a time"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The evolution of the English language"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New receiving core among showcases of spring game"
            }, 
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.341, 
                    "neu": 0.659, 
                    "pos": 0.0
                }, 
                "title": "Public addressing wrong issues on bathroom debate"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.634, 
                    "pos": 0.366
                }, 
                "title": "Top 10 animes all anime lovers need to watch this summer"
            }, 
            {
                "data": {
                    "compound": 0.6808, 
                    "neg": 0.0, 
                    "neu": 0.517, 
                    "pos": 0.483
                }, 
                "title": "Hong builds friendships, passion through Japanese martial art"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Coppell City Council Meetings"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click here to schedule an appointment for your senior picture"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Leadership role on girls basketball team leads to coach of the year title"
            }, 
            {
                "data": {
                    "compound": 0.7351, 
                    "neg": 0.0, 
                    "neu": 0.617, 
                    "pos": 0.383
                }, 
                "title": "Alice Through the Looking Glass brings adventure, beautiful imagery to the screen"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "About Us and Policies"
            }
        ], 
        "location": {
            "lat": 32.9545687, 
            "lng": -97.01500779999999
        }, 
        "paper": "Coppell Student Media", 
        "rank": 5726523
    }, 
    {
        "city": "Coppell, TX", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.833, 
                    "pos": 0.167
                }, 
                "title": "Fink finishes on top as male athlete of the year"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A whole new outlook on food"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "AP/IB art students paint with a purpose at showcase"
            }, 
            {
                "data": {
                    "compound": 0.7184, 
                    "neg": 0.0, 
                    "neu": 0.4, 
                    "pos": 0.6
                }, 
                "title": "Academic encouragement through honor roll lunch"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "College is a place to grow up, not be more coddled"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find your summer sound"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.811, 
                    "pos": 0.189
                }, 
                "title": "Mukund creates music blog to end high school with a bang"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Making a difference one dollar at a time"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The evolution of the English language"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New receiving core among showcases of spring game"
            }, 
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.341, 
                    "neu": 0.659, 
                    "pos": 0.0
                }, 
                "title": "Public addressing wrong issues on bathroom debate"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.634, 
                    "pos": 0.366
                }, 
                "title": "Top 10 animes all anime lovers need to watch this summer"
            }, 
            {
                "data": {
                    "compound": 0.6808, 
                    "neg": 0.0, 
                    "neu": 0.517, 
                    "pos": 0.483
                }, 
                "title": "Hong builds friendships, passion through Japanese martial art"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Coppell City Council Meetings"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click here to schedule an appointment for your senior picture"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Leadership role on girls basketball team leads to coach of the year title"
            }, 
            {
                "data": {
                    "compound": 0.7351, 
                    "neg": 0.0, 
                    "neu": 0.617, 
                    "pos": 0.383
                }, 
                "title": "Alice Through the Looking Glass brings adventure, beautiful imagery to the screen"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "About Us and Policies"
            }
        ], 
        "location": {
            "lat": 32.9545687, 
            "lng": -97.01500779999999
        }, 
        "paper": "Coppell Student Media", 
        "rank": 5726523
    }, 
    {
        "city": "Mesquite, TX", 
        "date": "201608022", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "City of Allen, Allen ISD purchase Molsen Farm property"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Deputy mayor pro tem named Leadership Fellow by Texas Municipal League"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.306, 
                    "neu": 0.694, 
                    "pos": 0.0
                }, 
                "title": "Plano Fire-Rescue seeks expanded Station No. 8"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.268, 
                    "neu": 0.732, 
                    "pos": 0.0
                }, 
                "title": "Rowlett Police search for garage burglary suspect"
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.706, 
                    "pos": 0.294
                }, 
                "title": "Mesquite ISD implements new teacher incentive program"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Calvary Temple Community Church"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "See homes that recently sold in Mesquite"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mesquite Police Blotter, July 20-24"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Column: Bloggin' away with words"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sit-downs only: McKinney 'restaurant row' discussion continues"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Carrollton woman dies while on trip with Boy Scouts"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Children\u2019s Lighthouse Learning Center opening in Lewisville"
            }, 
            {
                "data": {
                    "compound": -0.1027, 
                    "neg": 0.167, 
                    "neu": 0.833, 
                    "pos": 0.0
                }, 
                "title": "Officials stunned as Lake Dallas mayor steps down"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Christian superheroes: Mesquite man creates unique comic book"
            }, 
            {
                "data": {
                    "compound": -0.7579, 
                    "neg": 0.481, 
                    "neu": 0.519, 
                    "pos": 0.0
                }, 
                "title": "Man charged in connection to murder in The Colony"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "TAAF Region 7 Track and Field Meet Results"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Profile: Mesquite ISD Superintendent David Vroonland"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Spraying to begin following 11th positive West Nile virus mosquito test in Lewisville"
            }, 
            {
                "data": {
                    "compound": 0.7783, 
                    "neg": 0.0, 
                    "neu": 0.424, 
                    "pos": 0.576
                }, 
                "title": "Mesquite ISD teachers honored with STEM awards"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.619, 
                    "pos": 0.381
                }, 
                "title": "Out & About: Mesquite celebrates Christmas in July"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Out & About: Mesquite MarketPlace offers plethora of goods in downtown square"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.619, 
                    "pos": 0.381
                }, 
                "title": "Frisco Dentistry for Kids celebrates 15th anniversary"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Column: Turning 12 into 144"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.581, 
                    "pos": 0.419
                }, 
                "title": "DCHHS reports positive West Nile cases"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.255, 
                    "neu": 0.745, 
                    "pos": 0.0
                }, 
                "title": "Suspects draw police gunfire in McKinney home burglary"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Denton County sheriff attends training conference"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Police reports: July 11-17"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Star Local Media Home"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Biotech Companies Are Still the \"It\" Stock to Have in Your Portfolio"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters To The Editor"
            }, 
            {
                "data": {
                    "compound": -0.0772, 
                    "neg": 0.075, 
                    "neu": 0.925, 
                    "pos": 0.0
                }, 
                "title": "A Peak Into The Future: New 11-6A shaping up to be one of toughest districts in the state"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "City discusses 2017 reopening of Andrew Brown Park"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Tip A Cop: Mesquite, Dallas officers collect donations for Special Olympics"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mesquite ISD hires three assistant principals"
            }, 
            {
                "data": {
                    "compound": 0.2263, 
                    "neg": 0.0, 
                    "neu": 0.808, 
                    "pos": 0.192
                }, 
                "title": "Warm cookies ahead: Tiff\u2019s Treats to open Allen-McKinney location"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.708, 
                    "pos": 0.292
                }, 
                "title": "Marlins swim team posts strong effort at regional meet"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rent prices 28th highest in U.S."
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.737, 
                    "pos": 0.263
                }, 
                "title": "Rodeo ready to open its new \u2018ERA\u2019 July 2"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.127, 
                    "neu": 0.678, 
                    "pos": 0.195
                }, 
                "title": "Eastfield College to expand brew program due to high demand"
            }, 
            {
                "data": {
                    "compound": 0.7906, 
                    "neg": 0.0, 
                    "neu": 0.529, 
                    "pos": 0.471
                }, 
                "title": "FC Dallas Premier shows second-half dominance in pool play win at nationals"
            }, 
            {
                "data": {
                    "compound": -0.7184, 
                    "neg": 0.353, 
                    "neu": 0.647, 
                    "pos": 0.0
                }, 
                "title": "Rowlett police release sketch of suspect in last week's Pokemon Go attempted abduction"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.633, 
                    "pos": 0.367
                }, 
                "title": "Red Cross launches safe water campaign"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "ST JUDES CATHOLIC CHURCH"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.791, 
                    "pos": 0.209
                }, 
                "title": "Local stars are bright at night for evening music and art series"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Town considers moving farmers market to Parker Square"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Showcasing their Skills: Area players look to stand out at football camps"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Departing Allen superintendent pens farewell letter to school, community"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Look before you lock your car"
            }, 
            {
                "data": {
                    "compound": -0.7579, 
                    "neg": 0.684, 
                    "neu": 0.316, 
                    "pos": 0.0
                }, 
                "title": "Missing Allen woman found dead"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mesquite employees \u2018Spread The Love\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Allen amends ordinance for keeping backyard chickens"
            }
        ], 
        "location": {
            "lat": 32.76679550000001, 
            "lng": -96.5991593
        }, 
        "paper": "The Mesquite News", 
        "rank": 286637
    }, 
    {
        "city": "Woodstock, GA", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": -0.2023, 
                    "neg": 0.265, 
                    "neu": 0.735, 
                    "pos": 0.0
                }, 
                "title": "Deputy charged with theft of drugs"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Tribune Ad"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.273, 
                    "neu": 0.455, 
                    "pos": 0.273
                }, 
                "title": "Cherokee County Fire Department promotes three"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Purchase Photos and Reprints"
            }, 
            {
                "data": {
                    "compound": 0.34, 
                    "neg": 0.0, 
                    "neu": 0.625, 
                    "pos": 0.375
                }, 
                "title": "Verizon retailer giving away backpacks"
            }, 
            {
                "data": {
                    "compound": 0.743, 
                    "neg": 0.0, 
                    "neu": 0.388, 
                    "pos": 0.612
                }, 
                "title": "Optimists Flags for Kids fundraiser a success"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Ledger Ad"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.7, 
                    "pos": 0.3
                }, 
                "title": "Open houses welcome students for new school year"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "School board renews Farm Bureau partnership"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Local association donates book bags"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.843, 
                    "pos": 0.157
                }, 
                "title": "Mayor\u2019s Recycling Challenge closes in on fifth year"
            }, 
            {
                "data": {
                    "compound": -0.6908, 
                    "neg": 0.588, 
                    "neu": 0.412, 
                    "pos": 0.0
                }, 
                "title": "Community mourns loss of slain teen"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Wal-Mart opens first training  academy in Ga."
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.714, 
                    "pos": 0.286
                }, 
                "title": "Deputies headed to Baton Rouge to honor slain officers"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.69, 
                    "pos": 0.31
                }, 
                "title": "Businesswoman changes careers with help of family"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Man confesses to shooting stepson"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Commission candidates gear up for Election Day"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.239, 
                    "neu": 0.761, 
                    "pos": 0.0
                }, 
                "title": "Downtown Waffle House proposal no longer on table"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submit Tribune Letter to Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Waffle House headed to council"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submit Ledger-News Letter to Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cherokee Tribune & Ledger News"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mayor takes butterfly pledge"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Wedding/Engagement/Anniversary Announcement"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.8176, 
                    "neg": 0.0, 
                    "neu": 0.444, 
                    "pos": 0.556
                }, 
                "title": "Local business receives award for Outstanding Revenue Performance"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.476, 
                    "pos": 0.524
                }, 
                "title": "Request Free Home Delivery"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.639, 
                    "neu": 0.361, 
                    "pos": 0.0
                }, 
                "title": "Deputy arrested for missing drugs"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.649, 
                    "pos": 0.351
                }, 
                "title": "Back-to-school sales tax holiday coming up"
            }
        ], 
        "location": {
            "lat": 34.1014873, 
            "lng": -84.5193754
        }, 
        "paper": "Cherokee Trubine & Ledger-News", 
        "rank": 665455
    }, 
    {
        "city": "Woodstock, GA", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Woodstock police to host National Night Out"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.698, 
                    "pos": 0.302
                }, 
                "title": "Dems gather to watch Clinton accept nomination"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Tribune Ad"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Back to school Blast Carnival"
            }, 
            {
                "data": {
                    "compound": 0.0258, 
                    "neg": 0.0, 
                    "neu": 0.845, 
                    "pos": 0.155
                }, 
                "title": "Teachers, principal reach out with bus tour"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.707, 
                    "pos": 0.293
                }, 
                "title": "Heatstroke Prevention Day reminder to keep children safe"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hundreds gather to remember \u2018best friend\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Purchase Photos and Reprints"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "3 high-density subdivisions on agenda"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Students head to class Monday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Ledger Ad"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.417, 
                    "neu": 0.583, 
                    "pos": 0.0
                }, 
                "title": "Woodstock teen found dead behind Roswell Publix"
            }, 
            {
                "data": {
                    "compound": 0.2263, 
                    "neg": 0.0, 
                    "neu": 0.759, 
                    "pos": 0.241
                }, 
                "title": "City votes to allow dogs in parks"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Weekend lightning sparks house fires"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.35, 
                    "neu": 0.65, 
                    "pos": 0.0
                }, 
                "title": "Vigil planned for Woodstock teen found dead behind Publix"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Woodstock pie contest planned for Saturday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MUST Ministries at YMCA"
            }, 
            {
                "data": {
                    "compound": -0.6705, 
                    "neg": 0.429, 
                    "neu": 0.571, 
                    "pos": 0.0
                }, 
                "title": "Man killed after shooting in local restaurant"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Canton to collect on mixed drink back taxes"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Georgia Milestones: Cherokee exceeding state averages"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.602, 
                    "pos": 0.398
                }, 
                "title": "Rescue cats still waiting for adoption"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.505, 
                    "neu": 0.495, 
                    "pos": 0.0
                }, 
                "title": "Man accused of shooting stepson denied bond"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cherokee County prepares for first day of classes"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submit Tribune Letter to Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "National Mutt Day: Not pure bred, but pure in heart"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.654, 
                    "pos": 0.346
                }, 
                "title": "Cherokee school officials: First day of school a success"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submit Ledger-News Letter to Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cherokee Tribune & Ledger News"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.526, 
                    "pos": 0.474
                }, 
                "title": "100-year-old woman still active"
            }, 
            {
                "data": {
                    "compound": 0.0516, 
                    "neg": 0.245, 
                    "neu": 0.49, 
                    "pos": 0.265
                }, 
                "title": "Two fallen horses receive help in Cherokee"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Place a Wedding/Engagement/Anniversary Announcement"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.476, 
                    "pos": 0.524
                }, 
                "title": "Request Free Home Delivery"
            }
        ], 
        "location": {
            "lat": 34.1014873, 
            "lng": -84.5193754
        }, 
        "paper": "Cherokee Trubine & Ledger-News", 
        "rank": 665455
    }, 
    {
        "city": "Marietta, GA", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.296, 
                    "neg": 0.0, 
                    "neu": 0.804, 
                    "pos": 0.196
                }, 
                "title": "Branson: Parents should join kids who insist on smoking pot"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.344, 
                    "neu": 0.656, 
                    "pos": 0.0
                }, 
                "title": "Update: Prosecutors drop all remaining charges in Freddie Gray case"
            }, 
            {
                "data": {
                    "compound": 0.7351, 
                    "neg": 0.0, 
                    "neu": 0.446, 
                    "pos": 0.554
                }, 
                "title": "Greater Community Church celebrates Men\u2019s Day Sunday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Coke's sales fall short of expectations on flat volume"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.444, 
                    "neu": 0.556, 
                    "pos": 0.0
                }, 
                "title": "Suspects from \u2018dangerous gang\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Gas South packs 1,000 lunches for Atlanta school children"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.239, 
                    "neu": 0.761, 
                    "pos": 0.0
                }, 
                "title": "Cologne cathedral hires lawyer to stop Pokemon hunters"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Unanimous commission vote OKs millage to \u2018rollback\u2019 rate of 6.66"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marietta\u2019s dk Gallery expanding to new Alabama location"
            }, 
            {
                "data": {
                    "compound": -0.3818, 
                    "neg": 0.257, 
                    "neu": 0.592, 
                    "pos": 0.151
                }, 
                "title": "'Big Bang' cast films melanoma PSA after death of young fan"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fremont council OKs Costco chicken plant development deal"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.2, 
                    "neu": 0.519, 
                    "pos": 0.281
                }, 
                "title": "FROMA HARROP: For Trump to lose, Clinton must win"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.571, 
                    "pos": 0.429
                }, 
                "title": "CAL THOMAS: Trump\u2019s acceptance speech"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Attorneys appear for Vince Neil in misdemeanor battery case"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "What happens when the polls close?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MICHAEL BARONE: What\u2019s \u2018making America one again\u2019 about?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Circus acrobats tie the knot on tightrope during show"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Word on the Street: What do you think about Donald Trump?"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.764, 
                    "pos": 0.236
                }, 
                "title": "Macland Baptist Church in Powder Springs celebrates 50th anniversary by opening time capsule"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Northside / Sandy Springs"
            }, 
            {
                "data": {
                    "compound": -0.7906, 
                    "neg": 0.583, 
                    "neu": 0.417, 
                    "pos": 0.0
                }, 
                "title": "Update: Bulldozer operator killed fighting California blaze"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.753, 
                    "pos": 0.247
                }, 
                "title": "U.S., Georgia chambers announce Isakson endorsement in Cobb"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cobb teachers return to school"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.375, 
                    "neu": 0.625, 
                    "pos": 0.0
                }, 
                "title": "Chilling details of France church attack as hostage speaks"
            }, 
            {
                "data": {
                    "compound": 0.1531, 
                    "neg": 0.184, 
                    "neu": 0.588, 
                    "pos": 0.228
                }, 
                "title": "US: Fighting in Syrian city yields trove of IS intelligence"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 14"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 21"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "AP Board names five Cornerstone Prep students as scholars"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New UGA coach talks high school football at Cobb Kickoff Luncheon"
            }, 
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.237, 
                    "neu": 0.763, 
                    "pos": 0.0
                }, 
                "title": "Wisconsin girls to be tried as adults in Slender Man attack"
            }, 
            {
                "data": {
                    "compound": -0.2808, 
                    "neg": 0.238, 
                    "neu": 0.591, 
                    "pos": 0.171
                }, 
                "title": "DICK YARBROUGH: What good is a bucket list without the gaithers on it?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.175, 
                    "neu": 0.667, 
                    "pos": 0.158
                }, 
                "title": "Guns N' Roses star Slash surprises 'School of Rock' cast"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "And now it's Comcast vs. the wait for the cable guy"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "APNewsBreak: Feds to complete purchase of Maine blueberries"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cobb Board of Education sets millage rate, appoints new principals"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Boyce outpolls Lee by a nearly 2-to-1 margin in Cobb chairman's race"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of June 30"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Powers Ferry UMC announces election of new bishop in church"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.828, 
                    "pos": 0.172
                }, 
                "title": "University of Georgia's new head coach Kirby Smart Speaks at Cobb Football Kickoff Luncheon"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.682, 
                    "pos": 0.318
                }, 
                "title": "Registration open for MUST charity golf tournament"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Officer files suit against Austell"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.619, 
                    "pos": 0.381
                }, 
                "title": "Morgan wins Cobb State Court judge race"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "How would you rate the Republican Convention where Trump and Pence became the nominated GOP ticket?"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.281, 
                    "neu": 0.719, 
                    "pos": 0.0
                }, 
                "title": "Groups sue over Navy's plan for war games on Pacific islands"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.281, 
                    "neu": 0.719, 
                    "pos": 0.0
                }, 
                "title": "Castles and death camps: Sites the pope will see in Poland"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cobb goes to the polls"
            }, 
            {
                "data": {
                    "compound": -0.7964, 
                    "neg": 0.504, 
                    "neu": 0.496, 
                    "pos": 0.0
                }, 
                "title": "Chlorine shock for water with amoeba that killed rafter"
            }, 
            {
                "data": {
                    "compound": 0.3252, 
                    "neg": 0.0, 
                    "neu": 0.682, 
                    "pos": 0.318
                }, 
                "title": "Vote your conscious, not your fears"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Delegate Diary: July 25"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.787, 
                    "pos": 0.213
                }, 
                "title": "Harmony Leland\u2019s replacement school a concern as Cobb hosts SPLOST community meetings"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Kennesaw State tapped as Big South\u2019s third-best team in preseason polling"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Delegate Diary: July 26"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fergie, Black Eyed Peas headline separate DNC concerts"
            }, 
            {
                "data": {
                    "compound": -0.4215, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Hiroshima unhappy atomic-bomb park is 'Pokemon Go' site"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Atlantic flights disrupted by Iceland air traffic glitch"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.633, 
                    "pos": 0.367
                }, 
                "title": "Southern Co. beats 2Q profit forecasts"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Info session on policing planned for Wednesday at Cobb Government Center"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.73, 
                    "pos": 0.27
                }, 
                "title": "Mike Boyce Wins Cobb Commission Chairman's Race over Incumbent Tim Lee"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Michigan biker nabbed after Facebook post about eluding cops"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Politics is a team sport"
            }, 
            {
                "data": {
                    "compound": 0.128, 
                    "neg": 0.0, 
                    "neu": 0.667, 
                    "pos": 0.333
                }, 
                "title": "Cobb County Legal Notices"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 7"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Official: Sheriff's deputy stole from evidence room"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Milestone scores trending upward; Cobb County tests higher in five high school tests"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Smyrna community voices concern about Cobb\u2019s possible upcoming SPLOST"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bill O'Reilly: Slaves that built White House were 'well-fed'"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "SHIFLETT, Eula Jo McKenzie"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Chattahoochee Tech Financial Aid administrators attend training"
            }, 
            {
                "data": {
                    "compound": 0.6597, 
                    "neg": 0.0, 
                    "neu": 0.625, 
                    "pos": 0.375
                }, 
                "title": "2016 Football Kickoff Coaches Luncheon Thursday Welcomes UGA Coach Kirby Smart"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.602, 
                    "pos": 0.398
                }, 
                "title": "Free school supplies at Back-to-School Bash"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "KATHLEEN PARKER: Night and day"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Opening turnout paints picture of MCMA unique juried exhibition"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.358, 
                    "neu": 0.642, 
                    "pos": 0.0
                }, 
                "title": "Actor Roger Moore 'heartbroken' over death of stepdaughter"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "County: I-285 bridge to be operational in March"
            }, 
            {
                "data": {
                    "compound": 0.743, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Georgia Cares hosting Color Me Free 5K to raise funds, awareness"
            }, 
            {
                "data": {
                    "compound": 0.8221, 
                    "neg": 0.0, 
                    "neu": 0.441, 
                    "pos": 0.559
                }, 
                "title": "CTC instructor honored with \u2018Buckle Up, America!\u2019 award"
            }
        ], 
        "location": {
            "lat": 33.95260200000001, 
            "lng": -84.5499327
        }, 
        "paper": "Marietta Daily Journal", 
        "rank": 189137
    }, 
    {
        "city": "Marietta, GA", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Strategist's bolt from GOP a sign of Trump's impact on party"
            }, 
            {
                "data": {
                    "compound": -0.5574, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Bill would end longstanding ban on bikes in US wilderness"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.735, 
                    "pos": 0.265
                }, 
                "title": "57 WellStar physicians named Top Doctors"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.738, 
                    "pos": 0.262
                }, 
                "title": "GEORGIA VOICES: Should middle Georgia raise its hand for a casino?"
            }, 
            {
                "data": {
                    "compound": -0.1531, 
                    "neg": 0.151, 
                    "neu": 0.849, 
                    "pos": 0.0
                }, 
                "title": "2017 Miss Cobb County Scholarship Pageant Aug. 6 at Anderson Theater"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.791, 
                    "pos": 0.209
                }, 
                "title": "Small upstate New York museum gets $11M gift in modern art, cash"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Interim president Davis: 60-90 days before KSU corrects wrongs"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 7"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Football teams return to field  in full pads for first time"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 28"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Update: Senate Republicans on the spot over Trump comments on Khan"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.828, 
                    "pos": 0.172
                }, 
                "title": "Cobb Schools Superintendent Chris Ragsdale Welcomes Back Teachers and Students at Lovingood Middle School"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.698, 
                    "pos": 0.302
                }, 
                "title": "Greater Community Church kicking off Millennial 31 Conference with special guest, actress Tika Sumpter"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Chattahoochee Tech Financial Aid administrators attend training"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.714, 
                    "pos": 0.286
                }, 
                "title": "Simon Cowell returning as 'America's Got Talent' judge"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Man on the Street: Political Conventions"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.792, 
                    "pos": 0.208
                }, 
                "title": "Tesla offers $2.6B for SolarCity to speed sustainable energy"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "School starts Monday for Cobb school students and Wednesday for Marietta students \u2013 more than a month before Labor Day, the traditional end of summer. What do you think of the school starting dates?"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.381, 
                    "neu": 0.619, 
                    "pos": 0.0
                }, 
                "title": "Two teenagers found dead behind Publix in Roswell"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.638, 
                    "pos": 0.362
                }, 
                "title": "Happier Meal? McDonald's nixing some unpalatable ingredients"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Northside / Sandy Springs"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.619, 
                    "pos": 0.381
                }, 
                "title": "Morgan wins Cobb State Court judge race"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "SUSAN ESTRICH: The Donald uncensored"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Elizabeth Wall appears in probable cause hearing"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Final family movie of the summer on Friday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Dem convention pandered to us on basis of \u2018group identity\u2019"
            }, 
            {
                "data": {
                    "compound": -0.0258, 
                    "neg": 0.252, 
                    "neu": 0.504, 
                    "pos": 0.244
                }, 
                "title": "Lee\u2019s defeat a change for the better in Cobb"
            }, 
            {
                "data": {
                    "compound": -0.5423, 
                    "neg": 0.304, 
                    "neu": 0.696, 
                    "pos": 0.0
                }, 
                "title": "Police investigating fatal shooting of Austell man on Sunday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cobb Planning Commission to consider 190-home development in west Cobb"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.262, 
                    "neu": 0.738, 
                    "pos": 0.0
                }, 
                "title": "Elizabeth Wall Probable Cause Hearing in Shooting Death of Daughter-in-Law Jenna Wall"
            }, 
            {
                "data": {
                    "compound": 0.7783, 
                    "neg": 0.0, 
                    "neu": 0.37, 
                    "pos": 0.63
                }, 
                "title": "Award honors University of Georgia alum"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.738, 
                    "pos": 0.262
                }, 
                "title": "NELSON PRICE: There always have been and are peaceful Muslims"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The \u2018Boy Who Lived\u2019 lives again in new Harry Potter book"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Boyce outpolls Lee by a nearly 2-to-1 margin in Cobb chairman's race"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Satanic group wants in at Still Elementary"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Weekly class on Christian history begins Sunday at First Presbyterian Church"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Proposed I-75 Cumberland ramp could now cost $51 million"
            }, 
            {
                "data": {
                    "compound": 0.6808, 
                    "neg": 0.0, 
                    "neu": 0.349, 
                    "pos": 0.651
                }, 
                "title": "Free Health Fair on Saturday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MELVYN FEIN: \u2018Hillary has been completely cleared\u2019"
            }, 
            {
                "data": {
                    "compound": 0.6124, 
                    "neg": 0.0, 
                    "neu": 0.643, 
                    "pos": 0.357
                }, 
                "title": "Celebrate National Bowling Day with Million Pin Challenge benefiting Feeding America"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Pope: It's 'terrible' children taught they can choose gender"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.216, 
                    "neu": 0.784, 
                    "pos": 0.0
                }, 
                "title": "Vevo cuts deal with Warner Music to license videos"
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.706, 
                    "pos": 0.294
                }, 
                "title": "Columnist McKee\u2019s sympathy for Tim Lee \u2018unappreciated\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Summer Concert Series at Mable House"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A family full of teachers"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 21"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.756, 
                    "pos": 0.244
                }, 
                "title": "Calvin Klein names Raf Simons as new chief creative officer"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "MDJ Time Capsule: The Week of July 14"
            }, 
            {
                "data": {
                    "compound": 0.2263, 
                    "neg": 0.174, 
                    "neu": 0.496, 
                    "pos": 0.331
                }, 
                "title": "Update: Obama challenges GOP to drop support for Trump"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Disney World exploring foot tracking technology"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Judge finalizes Amy Poehler and Will Arnett's divorce"
            }, 
            {
                "data": {
                    "compound": 0.8442, 
                    "neg": 0.0, 
                    "neu": 0.435, 
                    "pos": 0.565
                }, 
                "title": "Anthony LaCava receives 2016 Ability Award from The Able Trust"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Zakary Jezequel Joins Family Profession Teaching in Cobb County Schools"
            }, 
            {
                "data": {
                    "compound": -0.5267, 
                    "neg": 0.254, 
                    "neu": 0.746, 
                    "pos": 0.0
                }, 
                "title": "Update: Obama: Pulling up drawbridge on trade would hurt US workers"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Teaching is a Family Tradition in the Jezequel Household"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Tax-free weekend, start of school drive Cobb Countians to stores"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Wrestler Snuka due in court on motion to force treatment"
            }, 
            {
                "data": {
                    "compound": 0.128, 
                    "neg": 0.0, 
                    "neu": 0.667, 
                    "pos": 0.333
                }, 
                "title": "Cobb County Legal Notices"
            }, 
            {
                "data": {
                    "compound": -0.3818, 
                    "neg": 0.271, 
                    "neu": 0.729, 
                    "pos": 0.0
                }, 
                "title": "Pence defends military mom's right to criticize Trump"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cobb's primary runoff election results certified"
            }, 
            {
                "data": {
                    "compound": 0.8221, 
                    "neg": 0.0, 
                    "neu": 0.441, 
                    "pos": 0.559
                }, 
                "title": "CTC instructor honored with \u2018Buckle Up, America!\u2019 award"
            }, 
            {
                "data": {
                    "compound": 0.2732, 
                    "neg": 0.0, 
                    "neu": 0.741, 
                    "pos": 0.259
                }, 
                "title": "Movie actors surprise workers at Alabama restaurant"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "After 'Pokemon Go' players knock on his door, man files suit"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Audition open to young actors for Peter Pan prequel production"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.575, 
                    "pos": 0.425
                }, 
                "title": "Boyce won \u2018the old-fashioned, shoe-leather way\u2019"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.727, 
                    "pos": 0.273
                }, 
                "title": "Jimmy Fallon set to host 2017 Golden Globe Awards"
            }, 
            {
                "data": {
                    "compound": 0.296, 
                    "neg": 0.0, 
                    "neu": 0.784, 
                    "pos": 0.216
                }, 
                "title": "Cobb reminds drivers to be alert as school starts"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Google sister company, drug maker to develop nerve implants"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "AROUND TOWN: Isakson focusing on re-election, not Trump"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ex-KSU chief Papp won\u2019t lead Chamber"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New Dali museum, WWII site in Australia, Rio street art"
            }, 
            {
                "data": {
                    "compound": -0.7964, 
                    "neg": 0.47, 
                    "neu": 0.53, 
                    "pos": 0.0
                }, 
                "title": "Update: Highway pole rips through bus in California crash, killing 5"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Kanye West hints at possible collaboration with Drake"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "PATRICK BUCHANAN: Philadelphia vs. Cleveland: Divided We Stand"
            }
        ], 
        "location": {
            "lat": 33.95260200000001, 
            "lng": -84.5499327
        }, 
        "paper": "Marietta Daily Journal", 
        "rank": 189137
    }, 
    {
        "city": "State College, PA", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.847, 
                    "pos": 0.153
                }, 
                "title": "Big Ten roundup: Here are the top storylines in the West"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 11, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State College Spikes' Josiah Viera is more than a bench coach"
            }, 
            {
                "data": {
                    "compound": -0.802, 
                    "neg": 0.444, 
                    "neu": 0.556, 
                    "pos": 0.0
                }, 
                "title": "NY man pleads guilty to killing son of former NFL player"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.686, 
                    "pos": 0.314
                }, 
                "title": "PSU football's strength tested in Lift For Life"
            }, 
            {
                "data": {
                    "compound": 0.296, 
                    "neg": 0.0, 
                    "neu": 0.864, 
                    "pos": 0.136
                }, 
                "title": "Some opposing schools are telling prospects Penn State is going back on probation, Barbour says"
            }, 
            {
                "data": {
                    "compound": -0.5267, 
                    "neg": 0.423, 
                    "neu": 0.577, 
                    "pos": 0.0
                }, 
                "title": "Houtzdale man sentenced to prison in vehicle theft"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 19, 2016"
            }, 
            {
                "data": {
                    "compound": -0.6486, 
                    "neg": 0.323, 
                    "neu": 0.677, 
                    "pos": 0.0
                }, 
                "title": "Sandy Pearlman, produced Clash, Blue Oyster Cult, dead at 72"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.758, 
                    "pos": 0.242
                }, 
                "title": "Her grandma helped nominate Truman. Now she\u2019s on hand for history"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Arts Fest turns 50"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "We have some big gender news about all our female presidents"
            }, 
            {
                "data": {
                    "compound": -0.2732, 
                    "neg": 0.208, 
                    "neu": 0.792, 
                    "pos": 0.0
                }, 
                "title": "Freddie Gray case: Charges against three remaining officers dropped"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Trump asks Russia to hack Clinton"
            }, 
            {
                "data": {
                    "compound": -0.8519, 
                    "neg": 0.58, 
                    "neu": 0.42, 
                    "pos": 0.0
                }, 
                "title": "Pa., U.S. push attention to opiods abuse crisis"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State College Things To Do"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State adds new engineering grad programs"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Trump bump: Poll shows Trump up post-convention"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.575, 
                    "pos": 0.425
                }, 
                "title": "State College Celebrates 4th of July"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.667, 
                    "pos": 0.333
                }, 
                "title": "School an asset to the region"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.75, 
                    "pos": 0.25
                }, 
                "title": "Local golfer continues to tee up a sweet life in retirement"
            }, 
            {
                "data": {
                    "compound": 0.4767, 
                    "neg": 0.0, 
                    "neu": 0.721, 
                    "pos": 0.279
                }, 
                "title": "Smiles for Miles advocates for additional testing for newborns"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Movie News & Reviews"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.39, 
                    "neu": 0.61, 
                    "pos": 0.0
                }, 
                "title": "Panel focuses on building heroin awareness"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 5, 2016"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.795, 
                    "pos": 0.205
                }, 
                "title": "Big Ten roundup: Top storylines in the East"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Social, Mobile & More"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.519, 
                    "pos": 0.481
                }, 
                "title": "\u2018Hamilton\u2019 fever hits Happy Valley"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "$7.50 for 15 Salted Pretzel Twists (An $15 Value!)"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 26, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.86, 
                    "pos": 0.14
                }, 
                "title": "Lubert tapped to lead Penn State board of trustees"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.541, 
                    "pos": 0.459
                }, 
                "title": "Shed light on the positives"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Living Columns & Blogs"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Political differences won\u2019t break bond between these twins"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.874, 
                    "pos": 0.126
                }, 
                "title": "Record number of students to attend Penn State in fall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Centre County coaches discuss offseason changes at Mountain League football media day"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Latest: Dem Senate hopefuls pounce on Trump's remarks"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Studio space grows on trees at PASCP"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.794, 
                    "pos": 0.206
                }, 
                "title": "Penn State trustees approve tuition increases"
            }, 
            {
                "data": {
                    "compound": 0.4585, 
                    "neg": 0.0, 
                    "neu": 0.75, 
                    "pos": 0.25
                }, 
                "title": "Penn State AD says schools 'aren't factual' in negative recruiting"
            }, 
            {
                "data": {
                    "compound": -0.765, 
                    "neg": 0.569, 
                    "neu": 0.431, 
                    "pos": 0.0
                }, 
                "title": "Munson man pleads guilty in assault case"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of June 27, 2016"
            }, 
            {
                "data": {
                    "compound": 0.765, 
                    "neg": 0.0, 
                    "neu": 0.548, 
                    "pos": 0.452
                }, 
                "title": "Centre County Emerald Award winners lead the way in recycling"
            }, 
            {
                "data": {
                    "compound": -0.4215, 
                    "neg": 0.177, 
                    "neu": 0.823, 
                    "pos": 0.0
                }, 
                "title": "He searched for Ground Zero survivors; now he\u2019s ill and pleading for medical coverage"
            }
        ], 
        "location": {
            "lat": 40.7933949, 
            "lng": -77.8600012
        }, 
        "paper": "Centre Daily Times", 
        "rank": 111441
    }, 
    {
        "city": "State College, PA", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.633, 
                    "pos": 0.367
                }, 
                "title": "Clarence Mounties stretch championship series lead"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State College Spikes' Josiah Viera is more than a bench coach"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 5, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Obama calls on Republicans to rescind endorsements of Trump"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 26, 2016"
            }, 
            {
                "data": {
                    "compound": 0.7351, 
                    "neg": 0.0, 
                    "neu": 0.53, 
                    "pos": 0.47
                }, 
                "title": "House of Care is \u2018home sweet home\u2019 to residents"
            }, 
            {
                "data": {
                    "compound": 0.2924, 
                    "neg": 0.0, 
                    "neu": 0.805, 
                    "pos": 0.195
                }, 
                "title": "Rubio sticking with Trump despite misgivings over fight with Khans"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.686, 
                    "pos": 0.314
                }, 
                "title": "PSU football's strength tested in Lift For Life"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Arts Fest turns 50"
            }, 
            {
                "data": {
                    "compound": -0.5719, 
                    "neg": 0.316, 
                    "neu": 0.684, 
                    "pos": 0.0
                }, 
                "title": "Is NC\u2019s \u2018Lost Colony\u2019 the next \u2018American Horror Story\u2019?"
            }, 
            {
                "data": {
                    "compound": -0.25, 
                    "neg": 0.2, 
                    "neu": 0.8, 
                    "pos": 0.0
                }, 
                "title": "Marijuana moved to summary offense in State College borough"
            }, 
            {
                "data": {
                    "compound": -0.8271, 
                    "neg": 0.592, 
                    "neu": 0.408, 
                    "pos": 0.0
                }, 
                "title": "Man arrested on felony, misdemeanor drug charges in Bellefonte"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.753, 
                    "pos": 0.247
                }, 
                "title": "Hillary Clinton formally accepts historic nomination for president"
            }, 
            {
                "data": {
                    "compound": 0.7351, 
                    "neg": 0.0, 
                    "neu": 0.53, 
                    "pos": 0.47
                }, 
                "title": "Penn State researcher hopes to gain ground on Zika"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State College Things To Do"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.648, 
                    "pos": 0.352
                }, 
                "title": "Rodriguez powers Spikes to win over Black Bears"
            }, 
            {
                "data": {
                    "compound": 0.6705, 
                    "neg": 0.0, 
                    "neu": 0.421, 
                    "pos": 0.579
                }, 
                "title": "Talented linebacker prospect picks Penn State"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.575, 
                    "pos": 0.425
                }, 
                "title": "State College Celebrates 4th of July"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The one Roger Ailes hire that changed American politics forever"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letters to the Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "After hiatus, Barrel 21 set to reopen"
            }, 
            {
                "data": {
                    "compound": 0.296, 
                    "neg": 0.0, 
                    "neu": 0.732, 
                    "pos": 0.268
                }, 
                "title": "Share our heritage: Cub Scouts in Millheim"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Movie News & Reviews"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Clearing up psoriasis myths during national psoriasis month"
            }, 
            {
                "data": {
                    "compound": 0.3612, 
                    "neg": 0.0, 
                    "neu": 0.706, 
                    "pos": 0.294
                }, 
                "title": "Sesame apologizes for 'misunderstandings' over stars' status"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Iowa man runs through Centre County for MS awareness"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.752, 
                    "pos": 0.248
                }, 
                "title": "Fun activities to make the most of the remaining summer weeks"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "$7.50 for 15 Salted Pretzel Twists (An $15 Value!)"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hicks, bullpen guide Spikes by Black Bears"
            }, 
            {
                "data": {
                    "compound": 0.203, 
                    "neg": 0.142, 
                    "neu": 0.673, 
                    "pos": 0.184
                }, 
                "title": "9 black women have been shot and killed by police this year, but without the outcry"
            }, 
            {
                "data": {
                    "compound": -0.4019, 
                    "neg": 0.278, 
                    "neu": 0.722, 
                    "pos": 0.0
                }, 
                "title": "Woman sues, says Sabres' Evander Kane injured her"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.86, 
                    "pos": 0.14
                }, 
                "title": "Lubert tapped to lead Penn State board of trustees"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Social, Mobile & More"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Living Columns & Blogs"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.874, 
                    "pos": 0.126
                }, 
                "title": "Record number of students to attend Penn State in fall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New State College police chief announced"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 11, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.794, 
                    "pos": 0.206
                }, 
                "title": "Penn State trustees approve tuition increases"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of July 19, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Pennsylvania Military Museum appoints new site administrator"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "McClatchy editorial cartoons for the week of June 27, 2016"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Local Foods Week brings Centre County chefs, locavores, farmers together"
            }
        ], 
        "location": {
            "lat": 40.7933949, 
            "lng": -77.8600012
        }, 
        "paper": "Centre Daily Times", 
        "rank": 111441
    }, 
    {
        "city": "State College, PA", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Collegian for Aug. 2, 2016. Next issue published Aug. 5, 2016."
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.167, 
                    "neu": 0.833, 
                    "pos": 0.0
                }, 
                "title": "Penn State\u2019s No Refund Theatre casts 'wrong' on purpose in miscast cabaret"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Phillies and THON teaming up during tonight's game, raising money for Four Diamonds Fund"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A look at the 20 former Penn State Nittany Lions heading to the 2016 Summer Olympics"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "From Stanford to Penn State, it's on us to take action"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "More Division I Sports"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Buy front page reprints"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fifteen-year-old State College singer releases third full-length album 'Roots'"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State, National and International"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.833, 
                    "pos": 0.167
                }, 
                "title": "\u2018Last Cruise\u2019 car show helps raise over $20,000 for Centre County Youth Services Bureau"
            }, 
            {
                "data": {
                    "compound": -0.4588, 
                    "neg": 0.25, 
                    "neu": 0.75, 
                    "pos": 0.0
                }, 
                "title": "Chris Sale controversy is latest example of White Sox failures"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State College Borough Council passes new marijuana ordinance"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Big Ten Media Day notebook: A look around the conference"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Children's Arts Fest Sidewalk Sale"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Centre County PAWS serving as 'forever home' for stray dogs and cats"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State intramural sports thriving on campus"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Buy Front Page Reprints"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State football players and coaches to know going into the 2016 season"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "14th Annual Lift For Life"
            }, 
            {
                "data": {
                    "compound": 0.296, 
                    "neg": 0.0, 
                    "neu": 0.833, 
                    "pos": 0.167
                }, 
                "title": "Incoming Penn State students share thoughts on the Penn State Reads program"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "'Simon Says' make connections"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State football lands 3-star athlete Brailyn Franklin"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Pick up a Collegian"
            }, 
            {
                "data": {
                    "compound": -0.7964, 
                    "neg": 0.535, 
                    "neu": 0.382, 
                    "pos": 0.083
                }, 
                "title": "State College Spikes suffer loss, manager prevents fight on Saturday"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State Majorettes \u201cTouch of Blue\u201d bring in the gold"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.686, 
                    "pos": 0.314
                }, 
                "title": "The 2016 Central Pennsylvania Festival of the Arts"
            }, 
            {
                "data": {
                    "compound": 0.6249, 
                    "neg": 0.0, 
                    "neu": 0.631, 
                    "pos": 0.369
                }, 
                "title": "Overcoming physical, mental limitations on the Great Wall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Children and Youth Sidewalk Sale kicks off 50th annual Arts Fest"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.753, 
                    "pos": 0.247
                }, 
                "title": "Parking at Fraser Street Garage undergoes system improvements"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.776, 
                    "pos": 0.224
                }, 
                "title": "Penn State football locks down verbal commitment from 3-star athlete"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A look at Schoolboy Q\u2019s album 'Blank Face LP'"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Lions, tigers and bears, oh my: A look at the The Animal Kingdom toy store"
            }, 
            {
                "data": {
                    "compound": -0.3818, 
                    "neg": 0.245, 
                    "neu": 0.755, 
                    "pos": 0.0
                }, 
                "title": "Rock band Disturbed to perform at Bryce Jordan Center"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.75, 
                    "pos": 0.25
                }, 
                "title": "Penn State football will benefit THON during the stripe out"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State football adds 3-star wide receiver to 2017 class"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hockey Valley, Nittany Nation and more: Exploring the All-Sports Museum"
            }
        ], 
        "location": {
            "lat": 40.7933949, 
            "lng": -77.8600012
        }, 
        "paper": "Daily Collegian", 
        "rank": 0
    }, 
    {
        "city": "State College, PA", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Collegian for July 26, 2016. Next issue published July 29, 2016."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State alumni working in medical marijuana business discuss future of the industry in Pennsylvania"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Buy Front Page Reprints"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.167, 
                    "neu": 0.833, 
                    "pos": 0.0
                }, 
                "title": "Penn State\u2019s No Refund Theatre casts 'wrong' on purpose in miscast cabaret"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Phillies and THON teaming up during tonight's game, raising money for Four Diamonds Fund"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A look at the 20 former Penn State Nittany Lions heading to the 2016 Summer Olympics"
            }, 
            {
                "data": {
                    "compound": -0.5719, 
                    "neg": 0.316, 
                    "neu": 0.684, 
                    "pos": 0.0
                }, 
                "title": "Negative recruiting key issue at Big Ten Media Days"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Pick up a Collegian"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "More Division I Sports"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "From Stanford to Penn State, it's on us to take action"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "NBA moving All-Star Game out of Charlotte, cites LGBT law"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Buy front page reprints"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fifteen-year-old State College singer releases third full-length album 'Roots'"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State, National and International"
            }, 
            {
                "data": {
                    "compound": -0.4588, 
                    "neg": 0.25, 
                    "neu": 0.75, 
                    "pos": 0.0
                }, 
                "title": "Chris Sale controversy is latest example of White Sox failures"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.167, 
                    "neu": 0.833, 
                    "pos": 0.0
                }, 
                "title": "Penn State student organizations send Senator Pat Toomey open letter about gun legislation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Big Ten Media Day notebook: A look around the conference"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Children's Arts Fest Sidewalk Sale"
            }, 
            {
                "data": {
                    "compound": 0.6486, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Penn State Board of Trustees approves tuition increase, announces new operating budget"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "International students at Penn State reflect on adapting to new culture"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "14th Annual Lift For Life"
            }, 
            {
                "data": {
                    "compound": -0.7964, 
                    "neg": 0.535, 
                    "neu": 0.382, 
                    "pos": 0.083
                }, 
                "title": "State College Spikes suffer loss, manager prevents fight on Saturday"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.686, 
                    "pos": 0.314
                }, 
                "title": "The 2016 Central Pennsylvania Festival of the Arts"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Michigan coach Jim Harbaugh wraps up Monday's Big Ten Media Day"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The vice president-shaped prop of campaign season"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BLOX Content Management System"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sam Ficken, former Penn State football kicker, signs with Jacksonville Jaguars"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State football coach James Franklin discusses 2016 season at Big Ten Media Day"
            }, 
            {
                "data": {
                    "compound": 0.6249, 
                    "neg": 0.0, 
                    "neu": 0.631, 
                    "pos": 0.369
                }, 
                "title": "Overcoming physical, mental limitations on the Great Wall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Children and Youth Sidewalk Sale kicks off 50th annual Arts Fest"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A look at Schoolboy Q\u2019s album 'Blank Face LP'"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Central PA 4th Fest"
            }, 
            {
                "data": {
                    "compound": -0.3818, 
                    "neg": 0.245, 
                    "neu": 0.755, 
                    "pos": 0.0
                }, 
                "title": "Rock band Disturbed to perform at Bryce Jordan Center"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Penn State athletic director Sandy Barbour talks scheduling, stadium renovations"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.793, 
                    "pos": 0.207
                }, 
                "title": "Former Collegian sports writer enjoying job at Sports Illustrated with The Monday Morning Quarterback"
            }
        ], 
        "location": {
            "lat": 40.7933949, 
            "lng": -77.8600012
        }, 
        "paper": "Daily Collegian", 
        "rank": 0
    }, 
    {
        "city": "Palmdale, CA", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.341, 
                    "neu": 0.659, 
                    "pos": 0.0
                }, 
                "title": "17 arrested 3 for DUI at Palmdale checkpoint"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "County urges gay, bisexual men to get vaccinated against meningitis"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submissions sought for Gabriel\u2019s House art contest"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The AV Times Staff"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.194, 
                    "neu": 0.806, 
                    "pos": 0.0
                }, 
                "title": "UPDATE: Sand Fire now 30,000+ acres, containment still at 10% [updated]"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Your Issues | Your News"
            }, 
            {
                "data": {
                    "compound": 0.802, 
                    "neg": 0.0, 
                    "neu": 0.294, 
                    "pos": 0.706
                }, 
                "title": "Team 399 wins Entrepreneurship Award"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "L.A. County official: Workers and businesses can thrive with a new minimum wage"
            }, 
            {
                "data": {
                    "compound": -0.7184, 
                    "neg": 0.6, 
                    "neu": 0.4, 
                    "pos": 0.0
                }, 
                "title": "Investigators seeking witnesses to fatal collision"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 27, 11:34 AM"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.649, 
                    "pos": 0.351
                }, 
                "title": "Katelynn Dinius awarded NASA Armstrong scholarship"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.526, 
                    "pos": 0.474
                }, 
                "title": "State Supreme Court declines to..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 26, 10:07 PM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 26, 11:56 PM"
            }, 
            {
                "data": {
                    "compound": -0.7717, 
                    "neg": 0.456, 
                    "neu": 0.544, 
                    "pos": 0.0
                }, 
                "title": "Man found dead during Sand Fire ID\u2019d, blaze 25% contained"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 26, 5:55 PM"
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.231, 
                    "neu": 0.769, 
                    "pos": 0.0
                }, 
                "title": "County backs away from marijuana..."
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.231, 
                    "neu": 0.769, 
                    "pos": 0.0
                }, 
                "title": "County shelters housing displaced animals due to Sand Fire"
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.118, 
                    "neu": 0.882, 
                    "pos": 0.0
                }, 
                "title": "County backs away from marijuana tax to fund homeless services"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.231, 
                    "neu": 0.769, 
                    "pos": 0.0
                }, 
                "title": "Sand Fire at 35,155 acres, most evacuation orders lifted"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 26, 9:08 PM"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.211, 
                    "neu": 0.789, 
                    "pos": 0.0
                }, 
                "title": "Brush fire breaks out near 14 Fwy in Santa Clarita"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 27, 11:09 AM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 26, 7:38 PM"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.375, 
                    "neu": 0.625, 
                    "pos": 0.0
                }, 
                "title": "UPDATE: Sand Fire now 30,000+..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jul 27, 11:30 AM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jay Levine, NASA Armstrong Flight Research Center"
            }
        ], 
        "location": {
            "lat": 34.5794343, 
            "lng": -118.1164613
        }, 
        "paper": "The Antelope Valley Times", 
        "rank": 585139
    }, 
    {
        "city": "Palmdale, CA", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.341, 
                    "neu": 0.659, 
                    "pos": 0.0
                }, 
                "title": "17 arrested 3 for DUI at Palmdale checkpoint"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "County urges gay, bisexual men to get vaccinated against meningitis"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Submissions sought for Gabriel\u2019s House art contest"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The AV Times Staff"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Your Issues | Your News"
            }, 
            {
                "data": {
                    "compound": -0.4019, 
                    "neg": 0.31, 
                    "neu": 0.69, 
                    "pos": 0.0
                }, 
                "title": "Motorcyclist injured in Palmdale hit-and-run, driver sought"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Palmdale Station's Most Wanted"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "L.A. County official: Workers and businesses can thrive with a new minimum wage"
            }, 
            {
                "data": {
                    "compound": -0.802, 
                    "neg": 0.706, 
                    "neu": 0.294, 
                    "pos": 0.0
                }, 
                "title": "2 killed in Lancaster traffic crash"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Palmdale Station\u2019s Most Wanted"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Sand Fire at 38,000+ acres, 40% contained"
            }, 
            {
                "data": {
                    "compound": 0.5994, 
                    "neg": 0.0, 
                    "neu": 0.719, 
                    "pos": 0.281
                }, 
                "title": "Family Movie Nights Friday, Super Soul Saturday at the Palmdale Amphitheater"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 02, 4:53 AM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 9:39 PM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 9:01 PM"
            }, 
            {
                "data": {
                    "compound": -0.7717, 
                    "neg": 0.456, 
                    "neu": 0.544, 
                    "pos": 0.0
                }, 
                "title": "Man found dead during Sand Fire ID\u2019d, blaze 25% contained"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 10:31 PM"
            }, 
            {
                "data": {
                    "compound": -0.6705, 
                    "neg": 0.6, 
                    "neu": 0.4, 
                    "pos": 0.0
                }, 
                "title": "2 killed in Lancaster traffic..."
            }, 
            {
                "data": {
                    "compound": -0.0516, 
                    "neg": 0.118, 
                    "neu": 0.882, 
                    "pos": 0.0
                }, 
                "title": "County backs away from marijuana tax to fund homeless services"
            }, 
            {
                "data": {
                    "compound": 0.802, 
                    "neg": 0.0, 
                    "neu": 0.294, 
                    "pos": 0.706
                }, 
                "title": "Team 399 wins Entrepreneurship Award"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 02, 5:33 AM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 9:57 PM"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 7:43 PM"
            }, 
            {
                "data": {
                    "compound": -0.4019, 
                    "neg": 0.403, 
                    "neu": 0.597, 
                    "pos": 0.0
                }, 
                "title": "Motorcyclist injured in Palmdale hit-and-run,..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Most Wanted AV Parolees"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aug 01, 12:39 PM"
            }
        ], 
        "location": {
            "lat": 34.5794343, 
            "lng": -118.1164613
        }, 
        "paper": "The Antelope Valley Times", 
        "rank": 585139
    }, 
    {
        "city": "Marion, OH", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "POW's remains home after 60+ years"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.635, 
                    "pos": 0.365
                }, 
                "title": "Marion County Fair Days 3 and 4"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Privacy Notice/Your California Privacy Rights"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.595, 
                    "pos": 0.405
                }, 
                "title": "\"Chillin' Pops\" brings positives to policing"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.548, 
                    "pos": 0.452
                }, 
                "title": "Sell your car for free"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Palace Theatre screens \u2018Finding Dory\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Summer prepares Hall's fall golf season"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Paralyzed woman defies odds, hikes Appalachian\u2026"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.566, 
                    "pos": 0.434
                }, 
                "title": "Marion County Fair Day 1"
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.566, 
                    "pos": 0.434
                }, 
                "title": "Marion County Fair Day 2"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "See                                 more video"
            }, 
            {
                "data": {
                    "compound": 0.6597, 
                    "neg": 0.0, 
                    "neu": 0.357, 
                    "pos": 0.643
                }, 
                "title": "#Fitnessedu: Healthy support for educators"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Police Beat: Two burglaries on Olney Avenue"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "New antibiotic, found in the nose, could treat deadly infections"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Construction on North State Street Bridge"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Advertising Terms and Conditions"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Activate your digital access."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Three shootings in city over the weekend"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Couple marries 30-feet in the air on high wire at Houston ceremony"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Log In or Subscribe to skip"
            }, 
            {
                "data": {
                    "compound": 0.4588, 
                    "neg": 0.0, 
                    "neu": 0.7, 
                    "pos": 0.3
                }, 
                "title": "Infant homicide case to go before grand jury"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "more NATION NOW stories"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.519, 
                    "pos": 0.481
                }, 
                "title": "Whirlpool wins anti-dumping trade ruling"
            }
        ], 
        "location": {
            "lat": 40.5886699, 
            "lng": -83.1285242
        }, 
        "paper": "The Marion Star", 
        "rank": 506218
    }, 
    {
        "city": "Marion, OH", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": -0.1779, 
                    "neg": 0.221, 
                    "neu": 0.779, 
                    "pos": 0.0
                }, 
                "title": "Are you a gossip (and don\u2019t know it)?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Things to See & Do"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "D-backs beat Reds 9-8"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion County Commissioner\u2019s Mee..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "William Basil McCoy, 78"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Larry D. Williams, 75, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find More News Here"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Charles Blankenship, 82, of Marion"
            }, 
            {
                "data": {
                    "compound": -0.7269, 
                    "neg": 0.703, 
                    "neu": 0.297, 
                    "pos": 0.0
                }, 
                "title": "Two seriously injured in motorcycle crash"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A Father\u2019s Day Thought"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Autism Connection Monthly Suppor..."
            }, 
            {
                "data": {
                    "compound": -0.765, 
                    "neg": 0.485, 
                    "neu": 0.515, 
                    "pos": 0.0
                }, 
                "title": "HB 50 Takes Needed Steps to Combat Elder Abuse"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to View More Obituaries"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Reds beat Giants 7-5"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Another home game, another draw for Crew SC, this time 2-2 vs. Orlando SC"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.597, 
                    "pos": 0.403
                }, 
                "title": "Multiple Sclerosis Self Help Mee..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "David E. Kaser, 72, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "U.S. Women smack Costa Rica 4-0 in final tune-up before Olympics"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.707, 
                    "pos": 0.293
                }, 
                "title": "Teens Against Drugs group hosting Day of Hope"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion Online is Owned and Powered by Neighborhood Image"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Orioles beat Indians 5-3 to earn sweep"
            }, 
            {
                "data": {
                    "compound": 0.34, 
                    "neg": 0.0, 
                    "neu": 0.673, 
                    "pos": 0.327
                }, 
                "title": "Marion campus fitness team takes first in Rivals Challenge"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Teams sought for 4th annual Timothy J. Millisor Memorial"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to Advertise on Marion Online"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Careers at Morrow County Hospital"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion Duplicate Bridge Club"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.69, 
                    "pos": 0.31
                }, 
                "title": "Return to top of page"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to View More Columns"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Website Design & Hosting"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Indians thump Royals 11-4"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Internet Tools & Tips"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "CLICK HERE to View More Classifieds!"
            }, 
            {
                "data": {
                    "compound": -0.5267, 
                    "neg": 0.477, 
                    "neu": 0.308, 
                    "pos": 0.215
                }, 
                "title": "Ohioans report police and fire charity scams"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find More Sports Here"
            }, 
            {
                "data": {
                    "compound": -0.34, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Arrest made in Big Island armed robbery"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Zachary Brendan Ulery, 22, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Kitchen Aid Stand Mixer"
            }
        ], 
        "location": {
            "lat": 40.5886699, 
            "lng": -83.1285242
        }, 
        "paper": "Marion Online News", 
        "rank": 3089934
    }, 
    {
        "city": "Marion, OH", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": -0.1779, 
                    "neg": 0.221, 
                    "neu": 0.779, 
                    "pos": 0.0
                }, 
                "title": "Are you a gossip (and don\u2019t know it)?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Things to See & Do"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find More News Here"
            }, 
            {
                "data": {
                    "compound": -0.2732, 
                    "neg": 0.231, 
                    "neu": 0.769, 
                    "pos": 0.0
                }, 
                "title": "State appellate court: Ohio abortion restriction are unconstitutional"
            }, 
            {
                "data": {
                    "compound": -0.7269, 
                    "neg": 0.703, 
                    "neu": 0.297, 
                    "pos": 0.0
                }, 
                "title": "Two seriously injured in motorcycle crash"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion County Commissioner\u2019s Mee..."
            }, 
            {
                "data": {
                    "compound": -0.765, 
                    "neg": 0.485, 
                    "neu": 0.515, 
                    "pos": 0.0
                }, 
                "title": "HB 50 Takes Needed Steps to Combat Elder Abuse"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to View More Obituaries"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Reds beat Giants 7-5"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Chuck Heimlich, 85, of Waldo"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.758, 
                    "pos": 0.242
                }, 
                "title": "Heard of Ever Student Succeeds Act? It takes effect in 2017"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.597, 
                    "pos": 0.403
                }, 
                "title": "Multiple Sclerosis Self Help Mee..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Toronto FC blanks Crew SC 3-0"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sue M. Lehner, 83, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.612, 
                    "pos": 0.388
                }, 
                "title": "Reds beat Padres 3-2 to win series"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.69, 
                    "pos": 0.31
                }, 
                "title": "Mid-Ohio Fine Art Society Monthl..."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Indians shutout A\u2019s 8-0 to earn sweep"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion Palace Theatre seeks volunteers for technical positions"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to Advertise on Marion Online"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion Duplicate Bridge Club"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Edwin V. \u201cEd\u201d Granger, 92, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.2023, 
                    "neg": 0.0, 
                    "neu": 0.69, 
                    "pos": 0.31
                }, 
                "title": "Return to top of page"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Click Here to View More Columns"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Website Design & Hosting"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Reds beat Giants 2-1 to take series"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Nationals beat Indians 4-1"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Internet Tools & Tips"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "CLICK HERE to View More Classifieds!"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "City to begin mosquito fogging this week"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion Online is Owned and Powered by Neighborhood Image"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Find More Sports Here"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "3 Br / 2 Bth Manufactured Home for Sale - River Valley Estates -Marion"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Peggy Jessie, 79, of Marion"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marion County Park District announced August 2016 activities"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Culvert replacements cause closures to two State Routes in Marion County"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fishing pole, reels, net"
            }
        ], 
        "location": {
            "lat": 40.5886699, 
            "lng": -83.1285242
        }, 
        "paper": "Marion Online News", 
        "rank": 3089934
    }, 
    {
        "city": "Alton, IL", 
        "date": "201702232", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u201cCheesecake Factory\u201d ads could be effort at \u2018phishing\u2019 or tied to virus - 2:32 pm updated: 3:41 pm."
            }, 
            {
                "data": {
                    "compound": -0.128, 
                    "neg": 0.097, 
                    "neu": 0.903, 
                    "pos": 0.0
                }, 
                "title": "AFSCME members authorize strike; Union considering what to do next - 12:57 pm updated: 4:17 pm."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Two plans to name Illinois highways for Obama in the works - 12:34 pm"
            }, 
            {
                "data": {
                    "compound": -0.2023, 
                    "neg": 0.141, 
                    "neu": 0.859, 
                    "pos": 0.0
                }, 
                "title": "Edwardsville man charged with robbery of U.S. Bank in O\u2019Fallon - 9:53 am"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letter To The Editor"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.784, 
                    "pos": 0.216
                }, 
                "title": "Local church to partner with Belleville organizations to offer free seminar - 3:08 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bark and bite: A new K-9 trots into Wood River\u2019s Police Department"
            }, 
            {
                "data": {
                    "compound": 0.0688, 
                    "neg": 0.186, 
                    "neu": 0.612, 
                    "pos": 0.202
                }, 
                "title": "\u2018PAINFUL\u2019 LOSS: Lake Land tops LC 115-114 in OT on last-second shot"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Godfrey\u2019s Crystal Stevens\u2019 healthy lifestyles book hits shelves - 5:06 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Telegraph\u2019s \u2018Fun 5\u2019 events this weekend - 8:30 pm"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.722, 
                    "pos": 0.278
                }, 
                "title": "Godfrey\u2019s Crystal Stevens\u2019 healthy lifestyles book hits shelves"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Schlafly: New deportation policies advance Trump\u2019s agenda"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sign Up For Notices"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bark and bite: A new K-9 trots into Wood River\u2019s Police Department - 2:00 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Telegraph On Facebook"
            }, 
            {
                "data": {
                    "compound": -0.4767, 
                    "neg": 0.241, 
                    "neu": 0.628, 
                    "pos": 0.131
                }, 
                "title": "East Alton murderer Corey Fox found fit to stand trial by judge - 4:50 pm"
            }, 
            {
                "data": {
                    "compound": 0.5423, 
                    "neg": 0.0, 
                    "neu": 0.788, 
                    "pos": 0.212
                }, 
                "title": "Margaret Hopkins to receive prestigious St. Louis Women of Achievement award at May luncheon"
            }, 
            {
                "data": {
                    "compound": 0.1531, 
                    "neg": 0.0, 
                    "neu": 0.849, 
                    "pos": 0.151
                }, 
                "title": "Davis, Wagner invite family of Blake Snyder to Trump\u2019s address"
            }, 
            {
                "data": {
                    "compound": -0.6908, 
                    "neg": 0.263, 
                    "neu": 0.737, 
                    "pos": 0.0
                }, 
                "title": "Suspect faces two felonies in Tuesday\u2019s holdup of US Bank in Upper Alton - 11:00 am updated: 11:06 am."
            }, 
            {
                "data": {
                    "compound": 0.6705, 
                    "neg": 0.0, 
                    "neu": 0.56, 
                    "pos": 0.44
                }, 
                "title": "Resale shop helps make Jersey Community Hospital bigger, better"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A state divided \u2013 Cubs vs. Cardinals: new Lincoln Presidential Library and Museum exhibit - 3:19 pm"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.758, 
                    "pos": 0.242
                }, 
                "title": "The Nature Institute\u2019s Riverbend Earth Day Festival seeking vendors - 1:14 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Little Mexico, offering big plates and speciality drinks, opens in Alton"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.752, 
                    "pos": 0.248
                }, 
                "title": "Local church to partner with Belleville organizations to offer free seminar"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.816, 
                    "pos": 0.184
                }, 
                "title": "Alton City Council approves TIF money for old post office work - 9:37 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u201cCheesecake Factory\u201d ads could be effort at \u2018phishing\u2019 or tied to virus"
            }, 
            {
                "data": {
                    "compound": -0.5267, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Alton man sentenced to 151 months in prison for cocaine possession - 3:53 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Editorial: Our communities are being trashed, litter by litter"
            }, 
            {
                "data": {
                    "compound": 0.1531, 
                    "neg": 0.0, 
                    "neu": 0.897, 
                    "pos": 0.103
                }, 
                "title": "Davis, Wagner invite family of Blake Snyder to Trump\u2019s address - 1:01 pm updated: 1:18 pm."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Wickenhauser: Taking more spiritual fiber for Lent"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Godfrey preparing for final phase of Stamper Lane project - 4:32 pm"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.823, 
                    "pos": 0.177
                }, 
                "title": "Movie review: \u2018A United Kingdom\u2019 is first \u2018must see\u2019 of the year - 10:59 pm"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.816, 
                    "pos": 0.184
                }, 
                "title": "Alton City Council approves TIF money for old post office work - 9:40 pm"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.714, 
                    "pos": 0.286
                }, 
                "title": "The Nature Institute\u2019s Riverbend Earth Day Festival seeking vendors"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Public hearings on Godfrey business districts held; advance to full board"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.797, 
                    "pos": 0.203
                }, 
                "title": "Movie review: \u2018A United Kingdom\u2019 is first \u2018must see\u2019 of the year"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "PREP SWIMMING: Alton\u2019s Clancy seeded ninth in state backstroke prelims"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.198, 
                    "neu": 0.802, 
                    "pos": 0.0
                }, 
                "title": "Brighton Township residents fear being railroaded in crossing deal - 8:34 pm updated: 12:43 pm."
            }, 
            {
                "data": {
                    "compound": -0.3818, 
                    "neg": 0.206, 
                    "neu": 0.794, 
                    "pos": 0.0
                }, 
                "title": "GREENFIELD 1A REGIONAL: Hawks shock North Greene; West Central beats Routt"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Telegraph\u2019s \u2018Fun 5\u2019 events this weekend"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Roxana High School presents \u2018The Music Man\u2019 featuring students from entire school district \u2014 opens Friday - 3:24 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Annual Eva A. McDonald Women\u2019s History Coalition breakfast set for March 4 in Alton - 2:54 pm updated: 10:21 am."
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.769, 
                    "pos": 0.231
                }, 
                "title": "Beiser, Citizens Utility Board partner for free utility bill clinic - 10:29 am"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Trump administration lifts transgender student bathroom guidance - 9:00 pm updated: 9:09 pm."
            }, 
            {
                "data": {
                    "compound": 0.5423, 
                    "neg": 0.0, 
                    "neu": 0.811, 
                    "pos": 0.189
                }, 
                "title": "Margaret Hopkins to receive prestigious St. Louis Women of Achievement award at May luncheon - 3:22 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Godfrey Women\u2019s Club sponsors Godfrey candidate forum March 9 - 4:56 pm"
            }
        ], 
        "location": {
            "lat": 38.8906038, 
            "lng": -90.1842764
        }, 
        "paper": "Alton Telegraph", 
        "rank": 383125
    }, 
    {
        "city": "Alton, IL", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Used Cars in Alton"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Add your business here +"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u2018Paint and sip\u2019 studio to open in August - 10:08 pm"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.638, 
                    "pos": 0.362
                }, 
                "title": "Happier Meal? McDonald\u2019s nixing some unpalatable ingredients"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.098, 
                    "neu": 0.549, 
                    "pos": 0.354
                }, 
                "title": "Roller derby crush: Metro-East players play passionately - 10:18 pm updated: 1:55 pm."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Average scores for area hospitals - 10:30 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Kid\u2019Cation begins Saturday - 5:44 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "JUNIOR LEGION BASEBALL: Alton embraces second place at state"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Letter To The Editor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Men\u2019s ministry cruising along with dual event"
            }, 
            {
                "data": {
                    "compound": -0.3182, 
                    "neg": 0.277, 
                    "neu": 0.723, 
                    "pos": 0.0
                }, 
                "title": "Suit: Birth control device faulty - 7:42 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Building a nest: Riverbend\u2019s Kid\u2019Cation continues with family-focused events"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "PREP YEAR IN REVIEW: Small-Schools Softball Coach of the Year Matt Baalman of Calhoun"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bags tournament to raise money for developing nations - 5:54 pm"
            }, 
            {
                "data": {
                    "compound": -0.7579, 
                    "neg": 0.481, 
                    "neu": 0.519, 
                    "pos": 0.0
                }, 
                "title": "3 charged in Gernigin murder - 7:10 pm updated: 1:35 pm."
            }, 
            {
                "data": {
                    "compound": -0.7003, 
                    "neg": 0.293, 
                    "neu": 0.707, 
                    "pos": 0.0
                }, 
                "title": "Carbondale officer shot during pursuit Sunday night, condition \u2018serious\u2019; No shots fired by officers - 11:24 am"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.823, 
                    "pos": 0.177
                }, 
                "title": "PREP YEAR IN REVIEW: Small-Schools Softball Player of the Year Grace Baalman of Calhoun"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.722, 
                    "pos": 0.278
                }, 
                "title": "Details of annual Haskell party set - 10:17 pm"
            }, 
            {
                "data": {
                    "compound": 0.0516, 
                    "neg": 0.0, 
                    "neu": 0.893, 
                    "pos": 0.107
                }, 
                "title": "Blagojevich won\u2019t attend resentencing; to take part by video - 9:15 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "U of Illinois chancellor brings wide-ranging experience - 7:39 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Registration season is here \u2014 already - 10:31 pm updated: 3:25 pm."
            }, 
            {
                "data": {
                    "compound": 0.6249, 
                    "neg": 0.078, 
                    "neu": 0.615, 
                    "pos": 0.307
                }, 
                "title": "Pay with canned goods at Got Faith? yard sale, help food pantries - 6:54 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Partial, full lane closures expected on IL-3 - 7:22 pm"
            }, 
            {
                "data": {
                    "compound": -0.2263, 
                    "neg": 0.192, 
                    "neu": 0.808, 
                    "pos": 0.0
                }, 
                "title": "APD hires two officers with sergeant resigning - 10:18 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sign Up For Notices"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Aljets: Shaped early by Florida recount"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.776, 
                    "pos": 0.224
                }, 
                "title": "Police find $42K and 42 cloned credit cards - 7:48 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Building a nest: Riverbend\u2019s Kid\u2019Cation continues with family-focused events - 10:50 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Jobs up in eight metros, down in six - 1:56 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Telegraph On Facebook"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Trampoline park injuries jump 12-fold as the trend spreads - 5:33 pm"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.69, 
                    "pos": 0.31
                }, 
                "title": "New sign welcomes to Alton - 10:12 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Appalachian Trail teaches less is more \u2014 Alton man simplifies life after journey - 10:14 pm"
            }, 
            {
                "data": {
                    "compound": -0.6249, 
                    "neg": 0.313, 
                    "neu": 0.687, 
                    "pos": 0.0
                }, 
                "title": "Cheaper oil sends Exxon, Chevron to worst quarter in years"
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.412, 
                    "neu": 0.588, 
                    "pos": 0.0
                }, 
                "title": "Woman sentenced for nursing home fraud, embezzlement - 11:32 am"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u2018Paint and sip\u2019 studio to open in August"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A call for foster families in Madison County - 7:29 pm"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.196, 
                    "neu": 0.804, 
                    "pos": 0.0
                }, 
                "title": "Largest towboat on Mississippi to stop in Alton - 5:41 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Women\u2019s Networking Group announce changes, next meeting Wednesday - 5:29 pm"
            }, 
            {
                "data": {
                    "compound": -0.6369, 
                    "neg": 0.464, 
                    "neu": 0.536, 
                    "pos": 0.0
                }, 
                "title": "Police say infant\u2019s death was accidental - 7:43 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A call for unity"
            }, 
            {
                "data": {
                    "compound": 0.4767, 
                    "neg": 0.0, 
                    "neu": 0.617, 
                    "pos": 0.383
                }, 
                "title": "Respect is key in bathroom debate"
            }, 
            {
                "data": {
                    "compound": 0.7269, 
                    "neg": 0.0, 
                    "neu": 0.681, 
                    "pos": 0.319
                }, 
                "title": "The Telegraph\u2019s Fun Five \u2014 Your guide to weekend entertainment - 10:45 pm updated: 10:45 pm."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Men\u2019s ministry cruising along with dual event - 10:57 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Stocks close mostly higher, helped by technology, oil"
            }, 
            {
                "data": {
                    "compound": -0.5106, 
                    "neg": 0.125, 
                    "neu": 0.875, 
                    "pos": 0.0
                }, 
                "title": "Alton girl faces life of pain unless properly diagnosed, family raising money to travel to National Institutes of Health - 9:32 pm updated: 10:00 am."
            }, 
            {
                "data": {
                    "compound": 0.3182, 
                    "neg": 0.0, 
                    "neu": 0.827, 
                    "pos": 0.173
                }, 
                "title": "Fair crowns go to L&C student and East Alton girl - 8:08 pm"
            }, 
            {
                "data": {
                    "compound": -0.7351, 
                    "neg": 0.554, 
                    "neu": 0.446, 
                    "pos": 0.0
                }, 
                "title": "Head-on crash kills Carlinville man - 1:10 pm"
            }, 
            {
                "data": {
                    "compound": -0.7003, 
                    "neg": 0.326, 
                    "neu": 0.674, 
                    "pos": 0.0
                }, 
                "title": "Carbondale officer shot during pursuit Sunday night, condition \u2018serious\u2019; No shots fired by officers"
            }, 
            {
                "data": {
                    "compound": -0.3182, 
                    "neg": 0.187, 
                    "neu": 0.813, 
                    "pos": 0.0
                }, 
                "title": "House races now key to Illinois\u2019 political power struggle - 8:49 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rauner: Illinois doing all it can on Legionnaires\u2019 cases - 9:12 pm"
            }, 
            {
                "data": {
                    "compound": -0.1779, 
                    "neg": 0.253, 
                    "neu": 0.575, 
                    "pos": 0.172
                }, 
                "title": "Defense: Suspect \u2018bamboozled\u2019 into confession - 10:19 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "CEO program gearing up for fall start - 1:10 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Appalachian Trail teaches less is more \u2014 Alton man simplifies life after journey"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fourth annual sickle cell walk in September - 10:47 pm"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.682, 
                    "pos": 0.318
                }, 
                "title": "Atrium hotel to be re-branded as Best Western - 7:34 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Illinois seeking new private manager for state\u2019s lottery - 9:07 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Business on Broadway - 1:41 pm updated: 1:48 pm."
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.702, 
                    "pos": 0.298
                }, 
                "title": "Happier Meal? McDonald\u2019s nixing some unpalatable ingredients - 3:12 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "City eyes bike, walking paths for transport center - 10:22 pm"
            }, 
            {
                "data": {
                    "compound": -0.7269, 
                    "neg": 0.542, 
                    "neu": 0.458, 
                    "pos": 0.0
                }, 
                "title": "Crash lawsuit ponders definition of funeral procession - 10:26 pm"
            }, 
            {
                "data": {
                    "compound": -0.296, 
                    "neg": 0.196, 
                    "neu": 0.804, 
                    "pos": 0.0
                }, 
                "title": "Money laundering suspect held, county seeks cash possession - 7:38 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Governor signs bill reducing marijuana penalties in Illinois - 6:12 pm"
            }, 
            {
                "data": {
                    "compound": 0.5719, 
                    "neg": 0.0, 
                    "neu": 0.684, 
                    "pos": 0.316
                }, 
                "title": "Ted\u2019s celebrates 50 years - 10:00 pm updated: 10:00 pm."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Unlikely destination: Red Cloud, Neb."
            }, 
            {
                "data": {
                    "compound": -0.5994, 
                    "neg": 0.495, 
                    "neu": 0.505, 
                    "pos": 0.0
                }, 
                "title": "Woman sentenced for nursing home fraud, embezzlement"
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.828, 
                    "pos": 0.172
                }, 
                "title": "Sisters do it again, Godfrey mayor declares special day - 7:05 pm updated: 10:38 am."
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.314, 
                    "neu": 0.686, 
                    "pos": 0.0
                }, 
                "title": "Man jailed for shooting neighbor\u2019s dog - 3:35 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "States\u2019 flag-burning laws unconstitutional, but persist - 7:38 pm"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "County cafeteria offers \u2018a quick bite\u2019 for a cause - 10:23 pm updated: 12:00 am."
            }, 
            {
                "data": {
                    "compound": 0.4019, 
                    "neg": 0.0, 
                    "neu": 0.748, 
                    "pos": 0.252
                }, 
                "title": "EAWR board to consider support for consolidation - 7:25 pm"
            }
        ], 
        "location": {
            "lat": 38.8906038, 
            "lng": -90.1842764
        }, 
        "paper": "Alton Telegraph", 
        "rank": 383125
    }, 
    {
        "city": "Charleston, IL", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Gallery: Charleston Fourth of July\u00a0festivities"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Housing and Dining Guide"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Eastern News"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Editorial: Hey Springfield, enough is\u00a0enough"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Five Mile House hosting open\u00a0house"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Smith Walbridge Clinics return to\u00a0Eastern"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rugby alumna named to U.S. Olympic\u00a0team"
            }, 
            {
                "data": {
                    "compound": 0.8225, 
                    "neg": 0.0, 
                    "neu": 0.317, 
                    "pos": 0.683
                }, 
                "title": "Editorial: Appreciate, help take care of the\u00a0Earth"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.648, 
                    "pos": 0.352
                }, 
                "title": "Bennett, Markowski homer in 4-3 win in series\u00a0opener"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.163, 
                    "neu": 0.51, 
                    "pos": 0.327
                }, 
                "title": "Students enjoy \u2018Pok\u00e9mon Go\u2019 craze, UPD emphasizes\u00a0safety"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cochren & Company to perform \u2018backwoods\u00a0Motown\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Baseball has potential to be a better\u00a0team"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Council to take action on alcohol and tobacco\u00a0ordinances"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mobile food pantry rolling in for final service\u00a0day"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marchers descend on office of Rep.\u00a0Phillips"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Council places liquor updates on\u00a0file"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Evangelist to bring message of\u00a0love"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Gallery: Madison Scouts Drum & Bugle\u00a0Corps"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.39, 
                    "neu": 0.61, 
                    "pos": 0.0
                }, 
                "title": "Column: Don\u2019t let fear hold you\u00a0back"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.541, 
                    "pos": 0.459
                }, 
                "title": "Tugs champions emerge after final\u00a0rounds"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Softball set to wrap up regular season at\u00a0home"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.49, 
                    "pos": 0.51
                }, 
                "title": "Husband and wife share passion for glass\u00a0creation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Music department hosting annual music\u00a0camp"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bennett shines on senior day, Eastern splits with\u00a0SEMO"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New student workers talk about their\u00a0experience"
            }, 
            {
                "data": {
                    "compound": 0.5423, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "ACTs celebration to bring peace to\u00a0campus"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photo Gallery: Memorial Day at Roselawn\u00a0Cemetery"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "GALLERY: The Cavaliers\u2019 Saturday night\u00a0performance"
            }
        ], 
        "location": {
            "lat": 39.4961458, 
            "lng": -88.1761521
        }, 
        "paper": "The Daily Eastern News", 
        "rank": 3608097
    }, 
    {
        "city": "Charleston, IL", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Gallery: Charleston Fourth of July\u00a0festivities"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Housing and Dining Guide"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "The Daily Eastern News"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Editorial: Hey Springfield, enough is\u00a0enough"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Five Mile House hosting open\u00a0house"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Smith Walbridge Clinics return to\u00a0Eastern"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Rugby alumna named to U.S. Olympic\u00a0team"
            }, 
            {
                "data": {
                    "compound": 0.8225, 
                    "neg": 0.0, 
                    "neu": 0.317, 
                    "pos": 0.683
                }, 
                "title": "Editorial: Appreciate, help take care of the\u00a0Earth"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.648, 
                    "pos": 0.352
                }, 
                "title": "Bennett, Markowski homer in 4-3 win in series\u00a0opener"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.163, 
                    "neu": 0.51, 
                    "pos": 0.327
                }, 
                "title": "Students enjoy \u2018Pok\u00e9mon Go\u2019 craze, UPD emphasizes\u00a0safety"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Cochren & Company to perform \u2018backwoods\u00a0Motown\u2019"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Baseball has potential to be a better\u00a0team"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Council to take action on alcohol and tobacco\u00a0ordinances"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Mobile food pantry rolling in for final service\u00a0day"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Marchers descend on office of Rep.\u00a0Phillips"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Council places liquor updates on\u00a0file"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Evangelist to bring message of\u00a0love"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Gallery: Madison Scouts Drum & Bugle\u00a0Corps"
            }, 
            {
                "data": {
                    "compound": -0.4939, 
                    "neg": 0.39, 
                    "neu": 0.61, 
                    "pos": 0.0
                }, 
                "title": "Column: Don\u2019t let fear hold you\u00a0back"
            }, 
            {
                "data": {
                    "compound": 0.5267, 
                    "neg": 0.0, 
                    "neu": 0.541, 
                    "pos": 0.459
                }, 
                "title": "Tugs champions emerge after final\u00a0rounds"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Softball set to wrap up regular season at\u00a0home"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.49, 
                    "pos": 0.51
                }, 
                "title": "Husband and wife share passion for glass\u00a0creation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Music department hosting annual music\u00a0camp"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bennett shines on senior day, Eastern splits with\u00a0SEMO"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "New student workers talk about their\u00a0experience"
            }, 
            {
                "data": {
                    "compound": 0.5423, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "ACTs celebration to bring peace to\u00a0campus"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Photo Gallery: Memorial Day at Roselawn\u00a0Cemetery"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "GALLERY: The Cavaliers\u2019 Saturday night\u00a0performance"
            }
        ], 
        "location": {
            "lat": 39.4961458, 
            "lng": -88.1761521
        }, 
        "paper": "The Daily Eastern News", 
        "rank": 3608097
    }, 
    {
        "city": "Valley Stream, NY", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream man joins law firm\u2019s healthcare team"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.707, 
                    "pos": 0.293
                }, 
                "title": "Esteemed doctor ends practice, shifts to medical marijuana"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.732, 
                    "pos": 0.268
                }, 
                "title": "Beloved Memorial JHS principal leaving district for Baldwin schools position"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Featured Home of the Week"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "July 28 \u2014 August 3"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream\u2019s oldest runner dies"
            }, 
            {
                "data": {
                    "compound": 0.5994, 
                    "neg": 0.0, 
                    "neu": 0.606, 
                    "pos": 0.394
                }, 
                "title": "Q: How Do I Budget for a Blissful Wedding?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask the Financial Advisor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sanitation worker hospitalized after incident at DPW yard"
            }, 
            {
                "data": {
                    "compound": -0.2023, 
                    "neg": 0.153, 
                    "neu": 0.847, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream man among 31 people charged in massive drug bust"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask The Real Estate Expert"
            }, 
            {
                "data": {
                    "compound": 0.6908, 
                    "neg": 0.0, 
                    "neu": 0.26, 
                    "pos": 0.74
                }, 
                "title": "Honoring a legacy of giving"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Memorial hosts discussion on character education"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Summertime in District 13"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Police searching for two who vandalized vehicles"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "In need of repairs, Valley Stream's high school district eyes $40M bond"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.465, 
                    "pos": 0.535
                }, 
                "title": "Powered by Creative Circle Media Solutions"
            }, 
            {
                "data": {
                    "compound": 0.6767, 
                    "neg": 0.0, 
                    "neu": 0.687, 
                    "pos": 0.313
                }, 
                "title": "Q: Inpatient Rehabilitation vs. Outpatient Rehabilitation?  Which Is Best for You?"
            }, 
            {
                "data": {
                    "compound": 0.5399, 
                    "neg": 0.0, 
                    "neu": 0.633, 
                    "pos": 0.367
                }, 
                "title": "Q: Is Summer Time a Good Whitening Time!!"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.612, 
                    "pos": 0.388
                }, 
                "title": "Taekwondo brothers win silver at national contest"
            }, 
            {
                "data": {
                    "compound": 0.0258, 
                    "neg": 0.0, 
                    "neu": 0.879, 
                    "pos": 0.121
                }, 
                "title": "On Black Lives Matter, let\u2019s opine less, listen more"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.556, 
                    "pos": 0.444
                }, 
                "title": "Ask The Elder Care Expert"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Writing on the Wall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask The Eye Doctor"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Man rescued from under van"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "On and off Broadway"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.704, 
                    "pos": 0.296
                }, 
                "title": "Q: What stones are best to use when you're building a patio?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Local officials feel \u2018electricity\u2019 at the RNC"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask the Masonry Expert"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A taste of Thailand in Valley Stream"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.729, 
                    "pos": 0.271
                }, 
                "title": "Food delivery company looking for opportunities to connect"
            }
        ], 
        "location": {
            "lat": 40.6642699, 
            "lng": -73.70846449999999
        }, 
        "paper": "Valley Stream Herald", 
        "rank": 486461
    }, 
    {
        "city": "Elizabethtown, KY", 
        "date": "201607271", 
        "headlines": [
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.543, 
                    "pos": 0.457
                }, 
                "title": "Lake Cumberland fourth best in U.S."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Lincoln Trail Area Development District"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Elizabethtown Community and Technical College"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Elizabethtown-Hardin County Industrial Foundation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Army  beginning hybrid cloud pilot program"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Office of Employment and Training"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "TSG visits Fort Knox"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.682, 
                    "pos": 0.318
                }, 
                "title": "Bodybuilding more than lifting weights, need pure love of sport"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Enlisted Aide Program application deadline Sept. 8"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u2018Whys\u2019 propel athletes to compete in Warrior Games"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Privacy policy, terms and conditions"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hardin County Public Library"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Read a digital copy of the latest edition of The Gold Standard online."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Post preparing for live AIE system"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "IRACH holding  town hall Monday"
            }, 
            {
                "data": {
                    "compound": -0.4215, 
                    "neg": 0.286, 
                    "neu": 0.714, 
                    "pos": 0.0
                }, 
                "title": "Conference focuses on emerging threats to \u2018cyber cities\u2019"
            }, 
            {
                "data": {
                    "compound": 0.34, 
                    "neg": 0.0, 
                    "neu": 0.714, 
                    "pos": 0.286
                }, 
                "title": "Ragged Edge theater producing \u2018James Harrod\u2019 play"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "WKU-Elizabethtown, Radcliff, Fort Knox"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "First addax born in Louisville Zoo since 2013, facing imminent extinction"
            }, 
            {
                "data": {
                    "compound": 0.4767, 
                    "neg": 0.0, 
                    "neu": 0.617, 
                    "pos": 0.383
                }, 
                "title": "CST training impresses \u2018Stripes\u2019 writer, producer"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Peeps on the Street"
            }, 
            {
                "data": {
                    "compound": 0.6249, 
                    "neg": 0.0, 
                    "neu": 0.638, 
                    "pos": 0.362
                }, 
                "title": "Two Kentucky youths take top honors in World School Archery tournament"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.61, 
                    "pos": 0.39
                }, 
                "title": "HRC Honor Guard \u2018dazzles\u2019 at celebration"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "\u2018The Big Fundamental\u2019 quietly  retires after  19 years"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.794, 
                    "pos": 0.206
                }, 
                "title": "JOBS FOR MILITARY FAMILY MEMBERS - Employment opportunities in, around Knox area"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Old Fort Harrod tells Kentucky\u2019s story"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Central Park featuring seven Shakespeare productions"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Two Army distance runners punch ticket to Rio"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "FKHS Lady Eagles preparing for soccer season"
            }
        ], 
        "location": {
            "lat": 37.7030646, 
            "lng": -85.8649408
        }, 
        "paper": "Fort Knox Gold Standard", 
        "rank": 5354315
    }, 
    {
        "city": "Valley Stream, NY", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream man joins law firm\u2019s healthcare team"
            }, 
            {
                "data": {
                    "compound": 0.4404, 
                    "neg": 0.0, 
                    "neu": 0.707, 
                    "pos": 0.293
                }, 
                "title": "Esteemed doctor ends practice, shifts to medical marijuana"
            }, 
            {
                "data": {
                    "compound": 0.5106, 
                    "neg": 0.0, 
                    "neu": 0.732, 
                    "pos": 0.268
                }, 
                "title": "Beloved Memorial JHS principal leaving district for Baldwin schools position"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Featured Home of the Week"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "July 28 \u2014 August 3"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream\u2019s oldest runner dies"
            }, 
            {
                "data": {
                    "compound": 0.5994, 
                    "neg": 0.0, 
                    "neu": 0.606, 
                    "pos": 0.394
                }, 
                "title": "Q: How Do I Budget for a Blissful Wedding?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Bellmorite volunteers at GOP convention"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask the Financial Advisor"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Sanitation worker hospitalized after incident at DPW yard"
            }, 
            {
                "data": {
                    "compound": -0.2023, 
                    "neg": 0.153, 
                    "neu": 0.847, 
                    "pos": 0.0
                }, 
                "title": "Valley Stream man among 31 people charged in massive drug bust"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask The Real Estate Expert"
            }, 
            {
                "data": {
                    "compound": 0.6908, 
                    "neg": 0.0, 
                    "neu": 0.26, 
                    "pos": 0.74
                }, 
                "title": "Honoring a legacy of giving"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Memorial hosts discussion on character education"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Summertime in District 13"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Police searching for two who vandalized vehicles"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "In need of repairs, Valley Stream's high school district eyes $40M bond"
            }, 
            {
                "data": {
                    "compound": 0.5574, 
                    "neg": 0.0, 
                    "neu": 0.465, 
                    "pos": 0.535
                }, 
                "title": "Powered by Creative Circle Media Solutions"
            }, 
            {
                "data": {
                    "compound": 0.6767, 
                    "neg": 0.0, 
                    "neu": 0.687, 
                    "pos": 0.313
                }, 
                "title": "Q: Inpatient Rehabilitation vs. Outpatient Rehabilitation?  Which Is Best for You?"
            }, 
            {
                "data": {
                    "compound": 0.5399, 
                    "neg": 0.0, 
                    "neu": 0.633, 
                    "pos": 0.367
                }, 
                "title": "Q: Is Summer Time a Good Whitening Time!!"
            }, 
            {
                "data": {
                    "compound": 0.5859, 
                    "neg": 0.0, 
                    "neu": 0.612, 
                    "pos": 0.388
                }, 
                "title": "Taekwondo brothers win silver at national contest"
            }, 
            {
                "data": {
                    "compound": 0.0258, 
                    "neg": 0.0, 
                    "neu": 0.879, 
                    "pos": 0.121
                }, 
                "title": "On Black Lives Matter, let\u2019s opine less, listen more"
            }, 
            {
                "data": {
                    "compound": 0.4939, 
                    "neg": 0.0, 
                    "neu": 0.556, 
                    "pos": 0.444
                }, 
                "title": "Ask The Elder Care Expert"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Writing on the Wall"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask The Eye Doctor"
            }, 
            {
                "data": {
                    "compound": 0.4215, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Man rescued from under van"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "On and off Broadway"
            }, 
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.704, 
                    "pos": 0.296
                }, 
                "title": "Q: What stones are best to use when you're building a patio?"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Local officials feel \u2018electricity\u2019 at the RNC"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Ask the Masonry Expert"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "A taste of Thailand in Valley Stream"
            }, 
            {
                "data": {
                    "compound": 0.3818, 
                    "neg": 0.0, 
                    "neu": 0.729, 
                    "pos": 0.271
                }, 
                "title": "Food delivery company looking for opportunities to connect"
            }
        ], 
        "location": {
            "lat": 40.6642699, 
            "lng": -73.70846449999999
        }, 
        "paper": "Valley Stream Herald", 
        "rank": 486461
    }, 
    {
        "city": "Elizabethtown, KY", 
        "date": "201608021", 
        "headlines": [
            {
                "data": {
                    "compound": 0.6369, 
                    "neg": 0.0, 
                    "neu": 0.543, 
                    "pos": 0.457
                }, 
                "title": "Lake Cumberland fourth best in U.S."
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fort Knox Community Schools"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "State Parks, trails offer spots for four-legged family members"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Lincoln Trail Area Development District"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Elizabethtown Community and Technical College"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Elizabethtown-Hardin County Industrial Foundation"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Hardin County Public Library"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Office of Employment and Training"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "BeastMode runners competing in Jr. Olympics"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Explore Kentucky\u2019s eight historic sites"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Privacy policy, terms and conditions"
            }, 
            {
                "data": {
                    "compound": 0.1531, 
                    "neg": 0.183, 
                    "neu": 0.583, 
                    "pos": 0.233
                }, 
                "title": "Safety No. 1 concern for start of new school year"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Read a digital copy of the latest edition of The Gold Standard online."
            }, 
            {
                "data": {
                    "compound": 0.743, 
                    "neg": 0.0, 
                    "neu": 0.588, 
                    "pos": 0.412
                }, 
                "title": "Hospital ER to become acute care clinic / Change becomes effective Sept. 1"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "WKU-Elizabethtown, Radcliff, Fort Knox"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Central Park featuring seven Shakespeare productions"
            }, 
            {
                "data": {
                    "compound": -0.6705, 
                    "neg": 0.478, 
                    "neu": 0.522, 
                    "pos": 0.0
                }, 
                "title": "Fisher served during initial drop of casualty unit"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Peeps on the Street"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Free-play scenarios allows cadets to think critically"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Key 2 Basketball Camp more than dribbling, passing"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Fort Knox Monthly Retirement Ceremony"
            }, 
            {
                "data": {
                    "compound": -0.2732, 
                    "neg": 0.231, 
                    "neu": 0.769, 
                    "pos": 0.0
                }, 
                "title": "Fort Hood medic lone medalist from All-Army Taekwondo"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Louisville Zoo opens new African area designed by St. Louis firm"
            }, 
            {
                "data": {
                    "compound": 0.4767, 
                    "neg": 0.0, 
                    "neu": 0.693, 
                    "pos": 0.307
                }, 
                "title": "Women\u2019s b-ball team seeks sixth consecutive gold medal"
            }, 
            {
                "data": {
                    "compound": 0.2263, 
                    "neg": 0.0, 
                    "neu": 0.853, 
                    "pos": 0.147
                }, 
                "title": "New rules allow enlisted Soldiers to become officers up to age 33"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "Two Army distance runners punch ticket to Rio"
            }, 
            {
                "data": {
                    "compound": 0.0, 
                    "neg": 0.0, 
                    "neu": 1.0, 
                    "pos": 0.0
                }, 
                "title": "FKHS Lady Eagles preparing for soccer season"
            }, 
            {
                "data": {
                    "compound": 0.0772, 
                    "neg": 0.0, 
                    "neu": 0.794, 
                    "pos": 0.206
                }, 
                "title": "MCLX challenges cadets in tactical environment"
            }
        ], 
        "location": {
            "lat": 37.7030646, 
            "lng": -85.8649408
        }, 
        "paper": "Fort Knox Gold Standard", 
        "rank": 5354315
    }
];

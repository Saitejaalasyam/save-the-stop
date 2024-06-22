/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/


// Select the database to use.
// Insert a few documents into the sales collection.

// MongoDB Playground
// Make sure you are connected to enable completions and to be able to run a playground.

// Use the database
use('Project_db');

// Insert documents into the Mango collection
db.Mango.insertMany([
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 1, 'stop_name': 'Floating Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.35], 'initial_stop': 1, 'final_stop': 0, 'time_arrival': '0', 'time_departure': '06:10 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 2, 'stop_name': 'Zebra Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.29500205913575], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:20 a.m.', 'time_departure': '06:20 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 3, 'stop_name': 'Crab Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.25737188907075], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:27 a.m.', 'time_departure': '06:27 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 4, 'stop_name': 'Solar Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.21829440477255], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:34 a.m.', 'time_departure': '06:34 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 5, 'stop_name': 'LED Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.1734276635412], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:42 a.m.', 'time_departure': '06:42 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 6, 'stop_name': 'Library Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.14158675040942], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:48 a.m.', 'time_departure': '06:48 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 7, 'stop_name': 'Glass House Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.10829852304414], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:54 a.m.', 'time_departure': '06:54 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 8, 'stop_name': 'Invisible Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.05185326794657], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:04 a.m.', 'time_departure': '07:04 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 9, 'stop_name': 'Echo Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 88.0156704121148], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:10 a.m.', 'time_departure': '07:10 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 10, 'stop_name': 'Space Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 87.97514561358336], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:17 a.m.', 'time_departure': '07:17 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 0, 'stops': {'stop_id': 11, 'stop_name': 'Galaxy Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.82, 87.92593692965224], 'initial_stop': 0, 'final_stop': 1, 'time_arrival': '07:26 a.m.', 'time_departure': '0'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 12, 'stop_name': 'Floating Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.3486970776304], 'initial_stop': 1, 'final_stop': 0, 'time_arrival': '07:41 a.m.', 'time_departure': '0'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 13, 'stop_name': 'Zebra Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.29369946689887], 'initial_stop': 0, 'final_stop': 1, 'time_arrival': '07:32 a.m.', 'time_departure': '07:32 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 14, 'stop_name': 'Crab Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.25606929683407], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:23 a.m.', 'time_departure': '07:23 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 15, 'stop_name': 'Solar Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.2169918125358], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:17 a.m.', 'time_departure': '07:17 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 16, 'stop_name': 'LED Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.1721250713045], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:11 a.m.', 'time_departure': '07:11 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 17, 'stop_name': 'Library Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.14028415817252], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '07:04 a.m.', 'time_departure': '07:04 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 18, 'stop_name': 'Glass House Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.10699593080749], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:59 a.m.', 'time_departure': '06:59 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 19, 'stop_name': 'Invisible Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.05055067570992], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:50 a.m.', 'time_departure': '06:50 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 20, 'stop_name': 'Echo Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 88.01436781987815], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:42 a.m.', 'time_departure': '06:42 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 21, 'stop_name': 'Space Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 87.97384302134672], 'initial_stop': 0, 'final_stop': 0, 'time_arrival': '06:35 a.m.', 'time_departure': '06:35 a.m.'}}},
    {'seq_id': 1, 'route': 'Mango', 'direction_id': 1, 'stops': {'stop_id': 22, 'stop_name': 'Galaxy Bus Stop', 'location': {'type': 'Point', 'coordinates': [-1.8145366411563608, 87.9246343374156], 'initial_stop': 0, 'final_stop': 1, 'time_arrival': '06:26 a.m.', 'time_departure': '0'}}}
]);

// Ensure a 2dsphere index is created on the location field
db.Mango.createIndex({'stops.location': '2dsphere'});

// Create a 2dsphere index on the 'location' field

db.getCollection('Papaya').insertMany([
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.35, -1.82]},'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:22 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'type': 'Point', 'coordinates': [88.29500205913575, -1.8199999999999996]},'initial_stop':0,'final_stop':0,'time_arrival':'6:30 a.m.','time_departure':'6:30 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop','location':{'type': 'Point', 'coordinates': [88.25737188907075, -1.819999999999999]},'initial_stop':0,'final_stop':0,'time_arrival':'6:36 a.m.','time_departure':'6:36 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'type': 'Point', 'coordinates': [88.21829440477255, -1.8199999999999996]},'initial_stop':0,'final_stop':0,'time_arrival':'6:42 a.m.','time_departure':'6:42 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':23,'stop_name':'Plastic Bus Stop','location':{'type': 'Point', 'coordinates': [88.21743484152333, -0.0400354754689092]},'initial_stop':0,'final_stop':0,'time_arrival':'6:50 a.m.','time_departure':'6:50 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':24,'stop_name':'Fish Bus Stop','location':{'type': 'Point', 'coordinates': [88.21709654979573, 1.0764843328676998]},'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':25,'stop_name':'Tree Bus Stop','location':{'type': 'Point', 'coordinates': [88.21653228584341, 2.518260466874731]},'initial_stop':0,'final_stop':0,'time_arrival':'7:02 a.m.','time_departure':'7:02 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':26,'stop_name':'Rock Bus Stop','location':{'type': 'Point', 'coordinates': [88.2162974709084, 3.4453699527514834]},'initial_stop':0,'final_stop':1,'time_arrival':'7:06 a.m.','time_departure':'0'}},


    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':12,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.3486970776304, 1.8145366411563608]},'initial_stop':0,'final_stop':1,'time_arrival':'7:15 a.m.','time_departure':'7:15 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':13,'stop_name':'Zebra Bus Stop','location':{'type': 'Point', 'coordinates': [88.29369946689887, 1.8145366411563608]},'initial_stop':0,'final_stop':0,'time_arrival':'7:07 a.m.','time_departure':'7:07 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':14,'stop_name':'Crab Bus Stop','location':{'type': 'Point', 'coordinates': [88.25606929683407, 1.8145366411563608]},'initial_stop':0,'final_stop':0,'time_arrival':'7:01 a.m.','time_departure':'7:01 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'type': 'Point', 'coordinates': [88.2169918125358, -1.8145366411563608]},'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':27,'stop_name':'Plastic Bus Stop','location':{'type': 'Point', 'coordinates': [88.21613287735067, -0.035871230633999315]},'initial_stop':0,'final_stop':0,'time_arrival':'6:47 a.m.','time_departure':'6:47 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':28,'stop_name':'Fish Bus Stop','location':{'type': 'Point', 'coordinates': [88.2157948326395, 1.0798341492692634]},'initial_stop':0,'final_stop':0,'time_arrival':'6:42 a.m.','time_departure':'6:42 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':29,'stop_name':'Tree Bus Stop','location':{'type': 'Point', 'coordinates': [88.21523098049752, 2.520559177893173]},'initial_stop':0,'final_stop':0,'time_arrival':'6:35 a.m.','time_departure':'6:35 a.m.'}},
    {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':30,'stop_name':'Rock Bus Stop','location':{'type': 'Point', 'coordinates': [88.21499633685825, 3.4469930293111823]},'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:31 a.m.'}}
]);
db.getCollection('Papaya').createIndex({'stops.location': '2dsphere'});

// Insert documents into the 'Orange' collection.
// Create a 2dsphere index on the location field.

db.getCollection('Orange').insertMany([
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 31,
            'stop_name': 'Music Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21653764139644, -6.128253220688306]
            },
            'initial_stop': 1,
            'final_stop': 0,
            'time_arrival': '0',
            'time_departure': '6:30 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 32,
            'stop_name': 'Dance Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21715023317154, -4.625997429888513]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:37 a.m.',
            'time_departure': '6:37 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 33,
            'stop_name': 'Bike Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21800741311085, -2.8486441786641703]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:45 a.m.',
            'time_departure': '6:45 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 4,
            'stop_name': 'Solar Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21829440477255, -1.8199999999999996]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:50 a.m.',
            'time_departure': '6:50 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 23,
            'stop_name': 'Plastic Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21743484152333, -0.04003547546890924]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:58 a.m.',
            'time_departure': '6:58 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 24,
            'stop_name': 'Fish Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21709654979573, 1.0764843328676998]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:03 a.m.',
            'time_departure': '7:03 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 25,
            'stop_name': 'Tree Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21653228584341, 2.518260466874731]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:10 a.m.',
            'time_departure': '7:10 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 34,
            'stop_name': 'Rock Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.2162974731744, 3.4482589462671127]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:14 a.m.',
            'time_departure': '7:14 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 35,
            'stop_name': 'Vintage Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21540488018111, 5.261071859794709]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:22 a.m.',
            'time_departure': '7:22 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 0,
        'stops': {
            'stop_id': 36,
            'stop_name': 'Bird House Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21480420129247, 6.747926650596862]
            },
            'initial_stop': 0,
            'final_stop': 1,
            'time_arrival': '7:29 a.m.',
            'time_departure': '0'
        }
    },

    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 37,
            'stop_name': 'Music Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21523633214328, -6.1196467638808745]
            },
            'initial_stop': 0,
            'final_stop': 1,
            'time_arrival': '7:39 a.m.',
            'time_departure': '7:39 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 38,
            'stop_name': 'Dance Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21584847682256, -4.618486196615595]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:32 a.m.',
            'time_departure': '7:32 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 39,
            'stop_name': 'Bike Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21670503063986, -2.8424297383848227]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:24 a.m.',
            'time_departure': '7:24 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 15,
            'stop_name': 'Solar Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.2169918125358, -1.8145366411563608]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:19 a.m.',
            'time_departure': '7:19 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 27,
            'stop_name': 'Plastic Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21613287735067, -0.035871230633999315]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:11 a.m.',
            'time_departure': '7:11 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 28,
            'stop_name': 'Fish Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.2157948326395, 1.0798341492692634]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '7:06 a.m.',
            'time_departure': '7:06 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 29,
            'stop_name': 'Tree Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21523098049752, 2.520559177893173]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:59 a.m.',
            'time_departure': '6:59 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 40,
            'stop_name': 'Rock Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21499633912259, 3.4498799176474026]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:55 a.m.',
            'time_departure': '6:55 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 41,
            'stop_name': 'Vintage Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21410439685839, 5.261372733779118]
            },
            'initial_stop': 0,
            'final_stop': 0,
            'time_arrival': '6:47 a.m.',
            'time_departure': '6:47 a.m.'
        }
    },
    {
        'seq_id': 1,
        'route': 'Orange',
        'direction_id': 1,
        'stops': {
            'stop_id': 42,
            'stop_name': 'Bird House Bus Stop',
            'location': {
                'type': 'Point',
                'coordinates': [88.21350415551827, 6.747145637417199]
            },
            'initial_stop': 1,
            'final_stop': 0,
            'time_arrival': '0',
            'time_departure': '6:40 a.m.'
        }
    }
]);

// Ensure a 2dsphere index is created on the 'location' field
db.getCollection('Orange').createIndex({'stops.location': '2dsphere'});
/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Project_db');

// Insert documents into the Kiwi collection
db.getCollection('Kiwi').insertMany([
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.35, -1.82]},'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:10 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':43,'stop_name':'Pixel Bus Stop','location':{'type': 'Point', 'coordinates': [88.3496900901281, -2.930706882536684]},'initial_stop':0,'final_stop':0,'time_arrival':'6:17 a.m.','time_departure':'6:17 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':33,'stop_name':'Bike Bus Stop','location':{'type': 'Point', 'coordinates': [88.21800741311085, -2.8486441786641703]},'initial_stop':0,'final_stop':0,'time_arrival':'6:26 a.m.','time_departure':'6:26 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':44,'stop_name':'Piano Bus Stop','location':{'type': 'Point', 'coordinates': [88.2179844949006, -2.9307068825366835]},'initial_stop':0,'final_stop':0,'time_arrival':'6:31 a.m.','time_departure':'6:31 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':45,'stop_name':'Gothic Bus Stop','location':{'type': 'Point', 'coordinates': [88.16298655403638, -2.930706882536683]},'initial_stop':0,'final_stop':0,'time_arrival':'6:36 a.m.','time_departure':'6:36 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'type': 'Point', 'coordinates': [88.10829852304414, -1.8199999999999996]},'initial_stop':0,'final_stop':0,'time_arrival':'6:39 a.m.','time_departure':'6:39 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'type': 'Point', 'coordinates': [88.05185326794657, -1.8199999999999994]},'initial_stop':0,'final_stop':0,'time_arrival':'6:44 a.m.','time_departure':'6:44 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':46,'stop_name':'Fold Bus Stop','location':{'type': 'Point', 'coordinates': [88.05127310691971, -1.9620017821835052]},'initial_stop':0,'final_stop':0,'time_arrival':'7:00 a.m.','time_departure':'7:00 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':34,'stop_name':'Rock Bus Stop','location':{'type': 'Point', 'coordinates': [88.2162974731744, 3.4482589462671127]},'initial_stop':0,'final_stop':0,'time_arrival':'7:17 a.m.','time_departure':'7:17 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':35,'stop_name':'Vintage House Bus Stop','location':{'type': 'Point', 'coordinates': [88.21540488018111, 5.261071859794709]},'initial_stop':0,'final_stop':0,'time_arrival':'7:22 a.m.','time_departure':'7:22 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':47,'stop_name':'Carvana Bus Stop','location':{'type': 'Point', 'coordinates': [88.341651564964, 4.6540770248954855]},'initial_stop':0,'final_stop':0,'time_arrival':'7:35 a.m.','time_departure':'7:35 a.m.'}},
    {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':48,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.35, -1.82]},'initial_stop':0,'final_stop':1,'time_arrival':'7:56 a.m.','time_departure':'0'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':49,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.3486970776304, -1.8145366411563608]},'initial_stop':0,'final_stop':1,'time_arrival':'7:56 a.m.','time_departure':'0'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':50,'stop_name':'Pixel Bus Stop','location':{'type': 'Point', 'coordinates': [88.28582767075004, -2.2012650068750905]},'initial_stop':0,'final_stop':0,'time_arrival':'7:49a.m.','time_departure':'7:49 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':39,'stop_name':'Bike Bus Stop','location':{'type': 'Point', 'coordinates': [88.21670503063986, -2.8424297383848227]},'initial_stop':0,'final_stop':0,'time_arrival':'7:40 a.m.','time_departure':'7:40 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':51,'stop_name':'Piano Bus Stop','location':{'type': 'Point', 'coordinates': [88.14109624742339, -2.2012650068750905]},'initial_stop':0,'final_stop':0,'time_arrival':'7:35 a.m.','time_departure':'7:35 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':52,'stop_name':'Gothic Bus Stop','location':{'type': 'Point', 'coordinates': [88.08609830655915, -2.2012650068750905]},'initial_stop':0,'final_stop':0,'time_arrival':'7:30 a.m.','time_departure':'7:30 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':18,'stop_name':'Glass House Bus Stop','location':{'type': 'Point', 'coordinates': [88.10699593080749, -1.8145366411563608]},'initial_stop':0,'final_stop':0,'time_arrival':'7:27 a.m.','time_departure':'7:27 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':19,'stop_name':'Invisible Bus Stop','location':{'type': 'Point', 'coordinates': [88.05055067571006, -1.8145366411563608]},'initial_stop':0,'final_stop':0,'time_arrival':'7:22 a.m.','time_departure':'7:22 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':53,'stop_name':'Fold Bus Stop','location':{'type': 'Point', 'coordinates': [88.03674790076613, 3.5298951574166626]},'initial_stop':0,'final_stop':0,'time_arrival':'7:06 a.m.','time_departure':'7:06 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':40,'stop_name':'Rock Bus Stop','location':{'type': 'Point', 'coordinates': [88.21499633912259, 3.4498799176474026]},'initial_stop':0,'final_stop':0,'time_arrival':'6:49 a.m.','time_departure':'6:49 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':41,'stop_name':'Vintage House Bus Stop','location':{'type': 'Point', 'coordinates': [88.21410439685839, 5.261372733779118]},'initial_stop':0,'final_stop':1,'time_arrival':'6:44 a.m.','time_departure':'6:44 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':54,'stop_name':'Carvana Bus Stop','location':{'type': 'Point', 'coordinates': [88.33578115046177, 5.330383365520733]},'initial_stop':0,'final_stop':1,'time_arrival':'6:31 a.m.','time_departure':'6:31 a.m.'}},
{'seq_id':1,'route':'Kiwi','direction_id':1,'stops':{'stop_id':55,'stop_name':'Floating Bus Stop','location':{'type': 'Point', 'coordinates': [88.3486970776304, -1.8145366411563608]},'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:10 a.m.'}}
]);

// Create the 2dsphere index on the location field
db.getCollection('Kiwi').createIndex({'stops.location':'2dsphere'});


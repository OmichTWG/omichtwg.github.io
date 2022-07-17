(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("room2",
{ "compressionlevel":-1,
 "height":22,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":5,
         "name":"player",
         "objects":[
                {
                 "class":"",
                 "height":31.2496666666667,
                 "id":1,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":672.375333333333,
                 "x":0,
                 "y":672.666666666667
                }, 
                {
                 "class":"",
                 "height":31.2497,
                 "id":2,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":64.3750000000001,
                 "x":127.8125,
                 "y":641.708483333333
                }, 
                {
                 "class":"",
                 "height":31.2497,
                 "id":4,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":92.375,
                 "x":227.145833333333,
                 "y":608.37515
                }, 
                {
                 "class":"",
                 "height":31.2497,
                 "id":5,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":95.0416666666666,
                 "x":383.8125,
                 "y":607.708483333333
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":6,
                 "name":"panel",
                 "point":true,
                 "properties":[
                        {
                         "name":"puzzle",
                         "type":"int",
                         "value":0
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":256,
                 "y":576
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":7,
                 "name":"panel",
                 "point":true,
                 "properties":[
                        {
                         "name":"puzzle",
                         "type":"int",
                         "value":0
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":256,
                 "y":640
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":8,
                 "name":"platform",
                 "point":true,
                 "properties":[
                        {
                         "name":"top",
                         "type":"bool",
                         "value":true
                        }, 
                        {
                         "name":"triggered",
                         "type":"int",
                         "value":0
                        }, 
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"vertical"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":224,
                 "y":544
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":9,
                 "name":"platform",
                 "point":true,
                 "properties":[
                        {
                         "name":"top",
                         "type":"bool",
                         "value":false
                        }, 
                        {
                         "name":"triggered",
                         "type":"int",
                         "value":0
                        }, 
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"vertical"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":480,
                 "y":640
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":10,
                 "name":"player",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":15.5000000000001,
                 "y":655
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":11,
                 "name":"control",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":16.6666666666667,
                 "y":26
                }, 
                {
                 "class":"",
                 "height":125.333333333333,
                 "id":12,
                 "name":"checkPoint",
                 "properties":[
                        {
                         "name":"x",
                         "type":"int",
                         "value":50
                        }, 
                        {
                         "name":"y",
                         "type":"int",
                         "value":655
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":0.5,
                 "y":544.666666666667
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":13,
                 "name":"fragilePlatform",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":320,
                 "y":608
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":14,
                 "name":"fragilePlatform",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":352,
                 "y":608
                }, 
                {
                 "class":"",
                 "height":31.2497,
                 "id":15,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":32.375,
                 "x":608,
                 "y":576
                }, 
                {
                 "class":"",
                 "height":447.583033333333,
                 "id":16,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":32.375,
                 "x":640,
                 "y":223.666666666667
                }, 
                {
                 "class":"",
                 "height":158.583033333333,
                 "id":17,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":63.7083666666668,
                 "x":480.47915,
                 "y":481.041816666667
                }, 
                {
                 "class":"",
                 "height":62.583,
                 "id":19,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":449.541733333333,
                 "x":31.5,
                 "y":480
                }, 
                {
                 "class":"",
                 "height":64.583,
                 "id":21,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":509.042,
                 "x":162,
                 "y":160
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":22,
                 "name":"outLight",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":352,
                 "y":0
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":23,
                 "name":"fragilePlatform",
                 "point":true,
                 "properties":[
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"rock"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":608,
                 "y":128
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":24,
                 "name":"fragilePlatform",
                 "point":true,
                 "properties":[
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"rock"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":608,
                 "y":96
                },
            
                {
                 "class":"",
                 "height":130.583,
                 "id":25,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":32.375,
                 "x":-32,
                 "y":543
                }, 
                {
                 "class":"",
                 "height":541.583,
                 "id":26,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":32.375,
                 "x":-1.1875,
                 "y":0.708499999999958
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":27,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":79.9999999999999,
                 "y":668.666666666667
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":28,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":431.333333333333,
                 "y":606
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":29,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":590.666666666667,
                 "y":670.666666666667
                }, 
                {
                 "class":"",
                 "height":128,
                 "id":30,
                 "name":"plotTrigger",
                 "properties":[
                        {
                         "name":"dialog",
                         "type":"string",
                         "value":"caveScene"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":544
                }, 
                {
                 "class":"",
                 "height":93.9163333333333,
                 "id":31,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":64.3756666666667,
                 "x":607.478833333333,
                 "y":1.04183333333337
                }, 
                {
                 "class":"",
                 "height":64,
                 "id":32,
                 "name":"goToRoom",
                 "properties":[
                        {
                         "name":"room",
                         "type":"string",
                         "value":"final-room"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":640,
                 "y":96
                }, 
                {
                 "class":"",
                 "height":31.583,
                 "id":33,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":256.542,
                 "x":192,
                 "y":416
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":36,
                 "name":"platform",
                 "point":true,
                 "properties":[
                        {
                         "name":"lever",
                         "type":"int",
                         "value":0
                        }, 
                        {
                         "name":"top",
                         "type":"bool",
                         "value":false
                        }, 
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"vertical"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":192,
                 "y":416
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":37,
                 "name":"platform",
                 "point":true,
                 "properties":[
                        {
                         "name":"lever",
                         "type":"int",
                         "value":0
                        }, 
                        {
                         "name":"top",
                         "type":"bool",
                         "value":true
                        }, 
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"vertical"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":456,
                 "y":416
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":38,
                 "name":"lever",
                 "point":true,
                 "properties":[
                        {
                         "name":"id",
                         "type":"int",
                         "value":0
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":426,
                 "y":400
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":39,
                 "name":"lever",
                 "point":true,
                 "properties":[
                        {
                         "name":"id",
                         "type":"int",
                         "value":0
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":160,
                 "y":463.33
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":40,
                 "name":"panel",
                 "point":true,
                 "properties":[
                        {
                         "name":"puzzle",
                         "type":"int",
                         "value":1
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":288,
                 "y":384
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":41,
                 "name":"panel",
                 "point":true,
                 "properties":[
                        {
                         "name":"puzzle",
                         "type":"int",
                         "value":1
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":288,
                 "y":448
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":42,
                 "name":"prompt",
                 "point":true,
                 "properties":[
                        {
                         "name":"text",
                         "type":"string",
                         "value":"\u042f \u0431\u044b \u0441\u0430\u043c \u043f\u043e\u0448\u0435\u043b \u043d\u0430\u0432\u0435\u0440\u0445, \u0430 \u0431\u0430\u0442\u044e \u043e\u0441\u0442\u0430\u0432\u0438\u043b \u0441\u043d\u0438\u0437\u0443."
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":224,
                 "y":448
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":43,
                 "name":"platform",
                 "point":true,
                 "properties":[
                        {
                         "name":"top",
                         "type":"bool",
                         "value":false
                        }, 
                        {
                         "name":"triggered",
                         "type":"int",
                         "value":1
                        }, 
                        {
                         "name":"variant",
                         "type":"string",
                         "value":"vertical"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":160,
                 "y":256
                }, 
                {
                 "class":"",
                 "height":31.583,
                 "id":44,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":127.875333333333,
                 "x":32,
                 "y":320
                }, 
                {
                 "class":"",
                 "height":31.583,
                 "id":45,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":95.875,
                 "x":127.333333333333,
                 "y":224
                }, 
                {
                 "class":"",
                 "height":160,
                 "id":47,
                 "name":"plotTrigger",
                 "properties":[
                        {
                         "name":"dialog",
                         "type":"string",
                         "value":"exitScene"
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":352,
                 "y":0
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":48,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":111,
                 "y":475.5
                },
            
                {
                 "class":"",
                 "height":0,
                 "id":49,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":493.5,
                 "y":476
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":50,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":78.5,
                 "y":316
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":51,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":239,
                 "y":156
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":52,
                 "name":"light",
                 "point":true,
                 "properties":[
                        {
                         "name":"mush",
                         "type":"bool",
                         "value":true
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":399,
                 "y":155
                }, 
                {
                 "class":"",
                 "height":255.333,
                 "id":53,
                 "name":"checkPoint",
                 "properties":[
                        {
                         "name":"x",
                         "type":"int",
                         "value":470
                        }, 
                        {
                         "name":"y",
                         "type":"int",
                         "value":460
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":512,
                 "y":224
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":22,
         "id":6,
         "name":"2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":21,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0,
            0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88,
            0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 98, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 88, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88],
         "height":22,
         "id":2,
         "name":"1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":21,
         "x":0,
         "y":0
        }, 
        {
         "data":[94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 88,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 88,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 88,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 95, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 100, 88,
            94, 0, 0, 0, 0, 93, 89, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 90,
            94, 0, 0, 0, 86, 100, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            89, 87, 87, 87, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 0, 0, 0, 0, 86, 87, 87, 87, 87, 87, 87, 85, 0, 0, 0, 0, 0, 0, 93,
            94, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0,
            99, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 96, 0, 0, 0, 0,
            92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 88, 94, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 94, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 93, 94, 0, 0, 86, 90,
            0, 0, 0, 0, 0, 0, 0, 86, 87, 85, 0, 0, 86, 87, 87, 100, 0, 0, 0, 0, 93,
            0, 0, 54, 0, 95, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 93,
            91, 91, 91, 91, 100, 99, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 100],
         "height":22,
         "id":1,
         "name":"0",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":21,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":22,
         "id":4,
         "name":"-1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":21,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":22,
         "id":3,
         "name":"-3 (wires)",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":21,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":54,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.0",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"default.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":21
});
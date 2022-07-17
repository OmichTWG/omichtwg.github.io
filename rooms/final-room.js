(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("final-room",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":3,
         "name":"objects",
         "objects":[
                {
                 "class":"",
                 "height":32,
                 "id":1,
                 "name":"solid",
                 "rotation":0,
                 "visible":true,
                 "width":320,
                 "x":0,
                 "y":288
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":2,
                 "name":"player",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":42.5,
                 "y":268
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":3,
                 "name":"control",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":16.5,
                 "y":23
                }, 
                {
                 "class":"",
                 "height":32,
                 "id":4,
                 "name":"endCollider",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":192,
                 "y":256
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":5,
                 "name":"sun",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":224,
                 "y":96
                }, 
                {
                 "class":"",
                 "height":64,
                 "id":6,
                 "name":"musicTrigger",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":224
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
            76, 76, 76, 76, 76, 76, 76, 76, 76, 76],
         "height":10,
         "id":2,
         "name":"1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            98, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            66, 66, 66, 66, 66, 66, 66, 66, 66, 66],
         "height":10,
         "id":1,
         "name":"0",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[101, 101, 101, 101, 101, 101, 101, 101, 101, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 104,
            102, 103, 103, 103, 103, 103, 103, 103, 103, 104],
         "height":10,
         "id":4,
         "name":"-1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[102, 0, 0, 0, 0, 0, 0, 0, 0, 101,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            103, 0, 0, 0, 0, 0, 0, 0, 0, 103],
         "height":10,
         "id":5,
         "name":"-2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":7,
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
 "width":10
});
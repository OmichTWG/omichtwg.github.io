(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("logo",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":2,
         "name":"\u0421\u043b\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 1",
         "objects":[
                {
                 "class":"",
                 "height":0,
                 "id":1,
                 "name":"logo",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":32,
                 "y":32
                }, 
                {
                 "class":"",
                 "height":0,
                 "id":2,
                 "name":"camera",
                 "point":true,
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":64,
                 "y":32
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":3,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.0",
 "tileheight":32,
 "tilesets":[],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":10
});
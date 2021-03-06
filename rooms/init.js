(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("init",
{ "compressionlevel":-1,
 "height":14,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":2,
         "name":"\u0421\u043b\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"init",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":333.697142118195,
                 "y":206.822707875339
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.3.1",
 "tileheight":32,
 "tilesets":[],
 "tilewidth":32,
 "type":"map",
 "version":1.2,
 "width":20
});
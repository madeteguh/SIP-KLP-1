var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_SiakBaru2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Siak Baru 2024<br />\
    <img src="styles/legend/SiakBaru2024_1_0.png" /> Hutan<br />\
    <img src="styles/legend/SiakBaru2024_1_1.png" /> Mangrove<br />\
    <img src="styles/legend/SiakBaru2024_1_2.png" /> Kebun Kayu<br />\
    <img src="styles/legend/SiakBaru2024_1_3.png" /> Tumbuhan non hutan<br />\
    <img src="styles/legend/SiakBaru2024_1_4.png" /> Pertanian<br />\
    <img src="styles/legend/SiakBaru2024_1_5.png" /> Permukiman<br />\
    <img src="styles/legend/SiakBaru2024_1_6.png" /> Non Vegetasi<br />\
    <img src="styles/legend/SiakBaru2024_1_7.png" /> Tambang<br />\
    <img src="styles/legend/SiakBaru2024_1_8.png" /> Sungai<br />\
    <img src="styles/legend/SiakBaru2024_1_9.png" /> Sawit<br />\
    <img src="styles/legend/SiakBaru2024_1_10.png" /> Sawah<br />\
    <img src="styles/legend/SiakBaru2024_1_11.png" /> Rawa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SiakBaru2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var lyr_SiakBaru2004_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Siak Baru 2004<br />\
    <img src="styles/legend/SiakBaru2004_2_0.png" /> Hutan<br />\
    <img src="styles/legend/SiakBaru2004_2_1.png" /> Mangrove<br />\
    <img src="styles/legend/SiakBaru2004_2_2.png" /> Kebun Kayu<br />\
    <img src="styles/legend/SiakBaru2004_2_3.png" /> Tumbuhan non hutan<br />\
    <img src="styles/legend/SiakBaru2004_2_4.png" /> Pertanian<br />\
    <img src="styles/legend/SiakBaru2004_2_5.png" /> Permukiman<br />\
    <img src="styles/legend/SiakBaru2004_2_6.png" /> Non Vegetasi<br />\
    <img src="styles/legend/SiakBaru2004_2_7.png" /> Tambang<br />\
    <img src="styles/legend/SiakBaru2004_2_8.png" /> Sungai<br />\
    <img src="styles/legend/SiakBaru2004_2_9.png" /> Sawit<br />\
    <img src="styles/legend/SiakBaru2004_2_10.png" /> Sawah<br />\
    <img src="styles/legend/SiakBaru2004_2_11.png" /> Rawa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SiakBaru2004_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var format_Bataspopup_3 = new ol.format.GeoJSON();
var features_Bataspopup_3 = format_Bataspopup_3.readFeatures(json_Bataspopup_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataspopup_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataspopup_3.addFeatures(features_Bataspopup_3);
var lyr_Bataspopup_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bataspopup_3, 
                style: style_Bataspopup_3,
                popuplayertitle: 'Batas pop up',
                interactive: true,
                title: '<img src="styles/legend/Bataspopup_3.png" /> Batas pop up'
            });

lyr_Basemap_0.setVisible(true);lyr_SiakBaru2024_1.setVisible(true);lyr_SiakBaru2004_2.setVisible(true);lyr_Bataspopup_3.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_SiakBaru2024_1,lyr_SiakBaru2004_2,lyr_Bataspopup_3];
lyr_Bataspopup_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Bataspopup_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_Bataspopup_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', });
lyr_Bataspopup_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
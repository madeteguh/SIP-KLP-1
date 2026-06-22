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
        
    title: ' Siak Baru 2024<br />\
    <img src="styles/legend/SiakBaru2024_1_0.png" /> 3<br />\
    <img src="styles/legend/SiakBaru2024_1_1.png" /> 5<br />\
    <img src="styles/legend/SiakBaru2024_1_2.png" /> 9<br />\
    <img src="styles/legend/SiakBaru2024_1_3.png" /> 13<br />\
    <img src="styles/legend/SiakBaru2024_1_4.png" /> 21<br />\
    <img src="styles/legend/SiakBaru2024_1_5.png" /> 24<br />\
    <img src="styles/legend/SiakBaru2024_1_6.png" /> 25<br />\
    <img src="styles/legend/SiakBaru2024_1_7.png" /> 30<br />\
    <img src="styles/legend/SiakBaru2024_1_8.png" /> 31<br />\
    <img src="styles/legend/SiakBaru2024_1_9.png" /> 33<br />\
    <img src="styles/legend/SiakBaru2024_1_10.png" /> 35<br />\
    <img src="styles/legend/SiakBaru2024_1_11.png" /> 40<br />\
    <img src="styles/legend/SiakBaru2024_1_12.png" /> 76<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SiakBaru2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var lyr_sawit2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sawit 2024<br />\
    <img src="styles/legend/sawit2024_2_0.png" /> Bukan Sawit<br />\
    <img src="styles/legend/sawit2024_2_1.png" /> Sawit<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sawit2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var lyr_sawit2004_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sawit 2004<br />\
    <img src="styles/legend/sawit2004_3_0.png" /> Bukan Sawit<br />\
    <img src="styles/legend/sawit2004_3_1.png" /> Sawit<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sawit2004_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var format_Bataspopup_4 = new ol.format.GeoJSON();
var features_Bataspopup_4 = format_Bataspopup_4.readFeatures(json_Bataspopup_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataspopup_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataspopup_4.addFeatures(features_Bataspopup_4);
var lyr_Bataspopup_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bataspopup_4, 
                style: style_Bataspopup_4,
                popuplayertitle: 'Batas pop up',
                interactive: true,
                title: '<img src="styles/legend/Bataspopup_4.png" /> Batas pop up'
            });

lyr_Basemap_0.setVisible(true);lyr_SiakBaru2024_1.setVisible(true);lyr_sawit2024_2.setVisible(true);lyr_sawit2004_3.setVisible(true);lyr_Bataspopup_4.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_SiakBaru2024_1,lyr_sawit2024_2,lyr_sawit2004_3,lyr_Bataspopup_4];
lyr_Bataspopup_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Bataspopup_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_Bataspopup_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', });
lyr_Bataspopup_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
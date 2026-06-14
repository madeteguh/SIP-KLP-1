var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_DeltaSawit_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Delta Sawit<br />\
    <img src="styles/legend/DeltaSawit_2_0.png" /> -1<br />\
    <img src="styles/legend/DeltaSawit_2_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DeltaSawit_2.png",
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

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_DeltaSawit_2.setVisible(true);lyr_Bataspopup_3.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleHybrid_1,lyr_DeltaSawit_2,lyr_Bataspopup_3];
lyr_Bataspopup_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Bataspopup_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_Bataspopup_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', });
lyr_Bataspopup_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
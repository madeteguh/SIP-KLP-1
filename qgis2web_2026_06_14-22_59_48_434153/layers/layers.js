var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_QHasil2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Q= Hasil 2024<br />\
    <img src="styles/legend/QHasil2024_1_0.png" /> Potensi Banjir Sangat Rendah<br />\
    <img src="styles/legend/QHasil2024_1_1.png" /> Potensi Banjir Rendah<br />\
    <img src="styles/legend/QHasil2024_1_2.png" /> Potensi sedang<br />\
    <img src="styles/legend/QHasil2024_1_3.png" /> Potensi Banjir Tinggi<br />\
    <img src="styles/legend/QHasil2024_1_4.png" /> Potensi Banjir Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/QHasil2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.711824, 45111.481105, 11461049.826183, 137119.633376]
        })
    });

        var lyr_LabelWilayah_2 = new ol.layer.Tile({
            'title': 'Label Wilayah ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiKecamatan_3 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_3 = format_BatasAdministrasiKecamatan_3.readFeatures(json_BatasAdministrasiKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_3.addFeatures(features_BatasAdministrasiKecamatan_3);
var lyr_BatasAdministrasiKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_3, 
                style: style_BatasAdministrasiKecamatan_3,
                popuplayertitle: 'Batas Administrasi Kecamatan ',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_3.png" /> Batas Administrasi Kecamatan '
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_QHasil2024_1,],
                                fold: 'open',
                                title: '2024'});

lyr_ESRISatellite_0.setVisible(true);lyr_QHasil2024_1.setVisible(true);lyr_LabelWilayah_2.setVisible(true);lyr_BatasAdministrasiKecamatan_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_2024,lyr_LabelWilayah_2,lyr_BatasAdministrasiKecamatan_3];
lyr_BatasAdministrasiKecamatan_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_BatasAdministrasiKecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', });
lyr_BatasAdministrasiKecamatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
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
var lyr_PotensiBanjir2004_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Potensi Banjir 2004<br />\
    <img src="styles/legend/PotensiBanjir2004_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/PotensiBanjir2004_1_1.png" /> Rendah<br />\
    <img src="styles/legend/PotensiBanjir2004_1_2.png" /> Sedang<br />\
    <img src="styles/legend/PotensiBanjir2004_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/PotensiBanjir2004_1_4.png" /> Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PotensiBanjir2004_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var lyr_PotensiBanjir2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Potensi Banjir 2024<br />\
    <img src="styles/legend/PotensiBanjir2024_2_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/PotensiBanjir2024_2_1.png" /> Rendah<br />\
    <img src="styles/legend/PotensiBanjir2024_2_2.png" /> Sedang<br />\
    <img src="styles/legend/PotensiBanjir2024_2_3.png" /> Tingi<br />\
    <img src="styles/legend/PotensiBanjir2024_2_4.png" /> Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PotensiBanjir2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.711824, 45111.481105, 11461049.826183, 137119.633376]
        })
    });

        var lyr_LabelWilayah_3 = new ol.layer.Tile({
            'title': 'Label Wilayah',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasi_4 = new ol.format.GeoJSON();
var features_BatasAdministrasi_4 = format_BatasAdministrasi_4.readFeatures(json_BatasAdministrasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_4.addFeatures(features_BatasAdministrasi_4);
var lyr_BatasAdministrasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_4, 
                style: style_BatasAdministrasi_4,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_4.png" /> Batas Administrasi'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_PotensiBanjir2024_2,],
                                fold: 'open',
                                title: '2024'});
var group_2004 = new ol.layer.Group({
                                layers: [lyr_PotensiBanjir2004_1,],
                                fold: 'open',
                                title: '2004'});

lyr_ESRISatellite_0.setVisible(true);lyr_PotensiBanjir2004_1.setVisible(true);lyr_PotensiBanjir2024_2.setVisible(true);lyr_LabelWilayah_3.setVisible(true);lyr_BatasAdministrasi_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_2004,group_2024,lyr_LabelWilayah_3,lyr_BatasAdministrasi_4];
lyr_BatasAdministrasi_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_BatasAdministrasi_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_BatasAdministrasi_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - visible with data', });
lyr_BatasAdministrasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
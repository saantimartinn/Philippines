var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_philippines_cables_1 = new ol.format.GeoJSON();
var features_philippines_cables_1 = format_philippines_cables_1.readFeatures(json_philippines_cables_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_philippines_cables_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_philippines_cables_1.addFeatures(features_philippines_cables_1);
var lyr_philippines_cables_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_philippines_cables_1, 
                style: style_philippines_cables_1,
                popuplayertitle: 'philippines_cables',
                interactive: true,
                title: '<img src="styles/legend/philippines_cables_1.png" /> philippines_cables'
            });
var lyr_philippines_smart_signal_zoom9_embedded_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'philippines_smart_signal_zoom9_embedded<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/philippines_smart_signal_zoom9_embedded_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12914800.299063, 469629.101784, 14245416.087452, 2504688.542849]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_philippines_cables_1.setVisible(true);lyr_philippines_smart_signal_zoom9_embedded_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_philippines_cables_1,lyr_philippines_smart_signal_zoom9_embedded_2];
lyr_philippines_cables_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'color': 'color', 'feature_id': 'feature_id', 'coordinates': 'coordinates', });
lyr_philippines_cables_1.set('fieldImages', {'id': '', 'name': '', 'color': '', 'feature_id': '', 'coordinates': '', });
lyr_philippines_cables_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'color': 'no label', 'feature_id': 'no label', 'coordinates': 'no label', });
lyr_philippines_cables_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
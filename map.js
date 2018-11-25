module.exports = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>간단한 지도 표시하기</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rrwyegccx8"></script>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rrwyegccx8&submodules=geocoder"></script>
</head>
<body>
<div id="map" style="width:100%;height:400px;"></div>

<script>
var mapOptions = {
    center: new naver.maps.LatLng(37.548302, 126.924950),
    zoom: 10,
    zoomControl: true,
    zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
    },
    scaleControl: false
};

var map = new naver.maps.Map('map', mapOptions);

var loc = '서울특별시 마포구 와우산로 66'

var contentString = [
    '<div class="iw_inner">',
    '   <p>카츠 3.3</p>',
    '</div>'
].join('');

naver.maps.Service.geocode({
    address: loc
}, function(status, response) {
    if (status !== naver.maps.Service.Status.OK) {
        return alert('Something wrong!');
    }

    var result = response.result, // 검색 결과의 컨테이너
        items = result.items; // 검색 결과의 배열

    pos = items[0].point
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(pos.y, pos.x),
        map: map
    });

    var infowindow = new naver.maps.InfoWindow({
        content: contentString,
        borderWidth: 1,
    });
    
    infowindow.open(map, marker)
});

</script>
</body>
</html>
`;

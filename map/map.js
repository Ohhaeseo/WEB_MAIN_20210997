var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = 
{
    center: new kakao.maps.LatLng(37.38029941039906, 126.92766162755456), // 지도의 중심좌표 // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시 위치 TOPRIGHT는 오른쪽 위를 의미
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); 


kakao.maps.load(function() 
{ // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
    var map = new kakao.maps.Map(node, options);
});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = 
    { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({ 
    // 지도 중심좌표에 마커를 생성합니다 
    position: map.getCenter() 
}); 






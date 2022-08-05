### 설명
휴대폰에 expo를 설치 하고서 노트북과 연결 하는 과정에서 모바일 기기에서 발생한 오류이다.  
먼저, `expo network response timed out` 오류가 발생하여
![image](https://user-images.githubusercontent.com/49461207/183029198-d59dbc64-d0fc-4351-8aa9-852d5f6a5951.png)  
[해당 블로그](https://kentakang.com/156)를 참고하여 인바운드 포트를 설정하여 문제를 해결,

하지만, 그 이후에도 여전히 다른 에러 문구를 보여주었다.  
![image](https://user-images.githubusercontent.com/49461207/183029403-9ed61093-705d-4e3b-96b4-a89792e7d714.png)  
이는 [이 곳](https://okky.kr/article/1143367?note=2653831)에서 힌트를 얻어 문제를 해결하였다.  
다른 블로그 글들을 참고하니, 이는 기존 연결에서 LAN을 활용한 연결인데, 노트북과 모바일에서 사용하는 네트워크가 다르기에 나타나는 문제인 듯 하였다.  


### 해결
![image](https://user-images.githubusercontent.com/49461207/183030449-59b27324-17dc-4e8a-8625-6524cdfd1a79.png)
에러 해결 이후, 정상 작동하는 모습

### 에러 1
휴대폰에 expo를 설치 하고서 노트북과 연결 하는 과정에서 모바일 기기에서 발생한 오류이다.  
먼저, `expo network response timed out` 오류가 발생하여  
![image](https://user-images.githubusercontent.com/49461207/183029403-9ed61093-705d-4e3b-96b4-a89792e7d714.png)  
[해당 블로그](https://kentakang.com/156)를 참고하여 인바운드 포트를 설정하여 문제를 해결

### 에러 2
하지만, 그 이후에도 여전히 다른 에러 문구를 보여주었다.  
![image](https://user-images.githubusercontent.com/49461207/183030728-b55e4e0a-dcc3-4641-b093-463267f45bcd.png)  
이는 [이 곳](https://okky.kr/article/1143367?note=2653831)에서 힌트를 얻어 문제를 해결하였다.  
다른 블로그 글들을 참고하니, 이는 기존 연결에서 LAN을 활용한 연결인데, 노트북과 모바일에서 사용하는 네트워크가 다르기에 나타나는 문제인 듯 하였다.  


### 해결
![image](https://user-images.githubusercontent.com/49461207/183031297-236fec9c-5974-4f47-8a61-ea50b4da7caf.png)  
에러 해결 이후, 정상 동작하는 모습

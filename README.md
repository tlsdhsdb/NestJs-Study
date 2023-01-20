# NestJs-Study
NestJS: The Complete Developer's Guide - Udemy를 수강하며 작성한 코드입니다.

[공부하며 작성한 블로그 글 한눈에 보기](https://velog.io/@dhsdb02/series/NestJs)

# 폴더별 세부내용

## Scratch 

[코드 바로가기](https://github.com/tlsdhsdb/NestJs-Study/tree/master/scratch/src)

시작을 위해 구성을 알아보기 위해 사용한 폴더,NestJS를 시작하며 NestJs의 기본 구조에 대해서 학습하기 위해 만든 프로젝트

- [관련 작성내용 : The Basic of Nest](https://velog.io/@dhsdb02/The-Basics-of-Nest)



## Messages 

[코드 바로가기](https://github.com/tlsdhsdb/NestJs-Study/tree/master/messages/src/messages)

NestJs를 이용하여 메세지 API를 구현해, 다음과 같은 내용을 학습하였습니다.

- Nest의 데코레이션,요청 데이터의 유효성을 검증하는 과정
- NestJs에서 서비스,레포지토리 코드를 작성하는 방법
- NestJs에서 오류를 검증하는 방법
- 의존성 주입과 의존성 주입의 bad case,better case,good case , NestJs에서의 의존성 주입 방법

[관련 작성내용 : Create Message API](https://velog.io/@dhsdb02/Creat-Message-API)

[관련 작성내용 : Service Repository](https://velog.io/@dhsdb02/Service-Repository)


## di 

[코드 바로가기](https://github.com/tlsdhsdb/NestJs-Study/tree/master/di/src)

모듈간의 종속성 관계를 학습하기 위해 작성한 프로젝트, 컴퓨터의 기본구조를 모방하여 구성하였습니다.
<img width="600" alt="image" src="https://user-images.githubusercontent.com/42714724/213594684-0d42d348-6e95-4b62-8c85-59af1783f1de.png">

## Car Pricing 

[코드바로가기](https://github.com/tlsdhsdb/NestJs-Study/tree/master/car-pricing/src)

NestJs를 이용하여 중고차 시세를 입력받고, 유저를 관리하는 기능을 구현하며 다음과 같은 내용을 학습하였습니다.

- TypeOrm을 이용하여 리포지토리에 코드를 작성하는 방법 

  [관련 작성내용 : Type Orm & Repository](https://velog.io/@dhsdb02/Creating-App)
  
  [관련 작성내용 : Reposiotory](https://velog.io/@dhsdb02/Creating-and-Saving-User-Data)
  
- 원하지 않는 내부응답을 숨기기,데이터를 직렬화 하는 방법

  [관련 작성내용 : Data Serialization](https://velog.io/@dhsdb02/Data-Serialization)
  
- 쿠키와 세션을 이용하여 Auth 기능을 구현하는 방법
- NestJs 인터셉터와 커스텀 데코레이터를 이용하는 방법

  [관련 작성내용 : Authentication](https://velog.io/@dhsdb02/Authentication)

- 추후 테스트코드 + a 추가 예정

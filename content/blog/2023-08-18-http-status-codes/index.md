---
title: 'HTTP Status Code'
date: 2023-08-18
description: '웹페이지에서 마주칠 수 있는 각 코드들의 의미에 맞는 적절한 사용을 위해 HTTP Status Code를 알아보자. 전체적으로는 조금 더 많은 응답 이 있지만 그중에 사용할만한 응답을 정리했다.'
thumbnail: ./thumbnail.png
category: 'frontend'
isHidden: false
---

## 개요

웹페이지에서 마주칠 수 있는 각 코드들의 의미에 맞는 적절한 사용을 위해 HTTP Status Code를 알아보자.

전체적으로는 조금 더 많은 응답 이 있지만 그중에 사용할만한 응답을 정리했다.

## Status Code란

요청에 대한 상태를 반환하는 세개의 숫자로 구성된 코드이다. 기본적으로 100번에서 500번까지 5개의 그룹으로 나뉘어 있으며 코드의 첫번째 숫자를 보면 어떠한 종류의 상태인지 알 수 있다.

- 1XX - Informational codes
- 2XX - Success codes
- 3XX - Redirection codes
- 4XX - Client error codes
- 5XX - Server error codes

## 1XX - in

요청이 수신 되었고, 처리가 되는 동안 임시적으로 발급하는 코드이다.

요청의 성콩 또는 실패를 나타내는 대신에 클라이언트와 서버 간의 프로토콜 통신에 사용된다.

### 100 (Continue)

서버가 요청의 처음 부분을 수신했으며 나머지 요청을 계속 처리

### 101 (Switching Protocols)

서버에서 프로토콜을 변경할 것임을 알려줌

### 102 Processing

서버에서 처리하고 있지만 최종응답을 보낼 준비는 되지 않음

## 2XX - Success

요청이 서버에 의해 성공적으로 처리되었음을 나타낸다..

일반적으로는 성공의 의미지만 추가적인 메ㅔ세지를 전달할 수 있다.

### 200 (OK)

요청이 성공적으로 완료되었으며 서버가 요청한 데이터를 반환

### 201 (Created)

요청이 성공적으로 완료되었으며 서버에 새 리소스가 생성됨

### 202 (Accepted)

서버에서 요청을 수락했지만 아직 처리를 완료하지 않음

### 204 (No Content)

요청에 성공했지만 반환할 데이터가 없음

### 205 (Reset Content)

요청이 완료된 이후 사용자에게 화면을 리셋하라고 알려줌

### 206 (Partial Content)

클라이언트에서 복수의 스트림을 분할 다운로드 하고자 범위 헤더에 전송하였기 때문에 사용됨

## 3XX - Redirection

클라이언트가 요청을 완료하기 위해 추가 작업을 진행해야 함을 의미한다.

일반적으로는 Redirection 을 의미한다.

### 301 Move Permanently

요청한 리소스가 영구적으로 새로운 URL로 이동되었음

### 302 Found

요청한 리소스가 임시적으로 새로운 URL로 이동되었음

### 303 (기타 위치 보기)

요청자가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.

### 304 (수정되지 않음)

마지막 요청이후 요청한 페이지는 수정되지 않았다.

서버가 이 응답을 표시하면 페이지의 콘텐츠를 표시하지 않는다. 요청자가 마지막으로 페이지를 요청한 후 페이지가 변경되지 않으면 이 응답을 표시하도록 서버에 구성해야 한다.

### 305 (프록시 사용)

요청자는 프록시를 사용하여 요청한 페이지만 엑세스할 수 있다. 서버가 이 응답을 표시하면 요청자가 사용할 프록시를 가리키는 것이기도 하다.

### 307 (임시 리다이렉션)

현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.

## 4XX Client Error

클라이언트 요청에 문제가 있을때 발생하게 되는 에러 코드이다.

### 400 (Bad Request)

서버가 요청의 구문을 인식하지 못했다.

### 401 (Unauthorized)

인증이 필요한 곳에서 인증이 되지 않았을때 발생

### 402 (Payment Required)

이 요청은 결제가 필요하다.

### 403 (Forbidden)

서버가 요청을 거부하고 있다. 예를 들면 사용자가 리소스에 대한 권한을 가지고 있지 않다.

### 404 (Not Found)

서버에서 요청받은 리소스를 찾을 수 없을때 발생 403 대신 사용될 수 있다.

### 405 (Method Not Allowed)

요청에 지정된 방법을 찾을 수 없을때 발생 요청 메소드를 다르게 요청했을때 발생

### 406 (Not Acceptable)

요청한 페이지가 요청한 콘텐츠 특성으로 응답할 수 없을때 발생

### 408 (Request Timeout)

서버의 요청 대기 시간을 초과했을때 발생

### 409 (Conflict)

서버가 요청을 수행하는 중에 충돌이 발생했을때 발생

### 410 (Gone)

요청한 리소스가 영구적으로 삭제되었을 때 이 응답을 표시한다. 404와 비슷하지만

이전에 있었지만 더 이상 존재하지 않는 리소스에 대해 404 대신 사용하기도 한다.

리소스가 영구적으로 이동된 경우 301을 사용하여 리소스의 새 위치를 지정해야 한다.

### 411 (Length Required)

서버는 유효한 컨텐츠 길이 헤더 입력란 없이는 요청을 수락하지 않는다.

### 413 (Payload Too Large)

요청이 너무 커서 서버가 처리할 수 없다.

### 414 (URI Too Long)

요청 URL이 너무 길어 서버가 처리할 수 없다.

### 415 (Unsupported Media Type)

요청이 요청한 페이지에서 지원하지 않는 형식으로 되어있다.

### 416 (Requested Range Not Satisfiable)

요청이 페이지에서 처리할 수 없는 범위에 해당되는 경우 발생

## 5XX Server Error

요청을 처리하는 동안 서버 측에서 오류가 발생했음을 나타낸다..

### 500 (Internal Server Error)

요청을 처리하는 동안 서버에 예기치 않은 오류 발생

### 501 (Not Implemented)

서버에 요청을 수행할 수 있는 기능이 없을때 발생

### 502 (Bad Gateway)

게이트웨이나 프록시의 상태가 나쁨

### 503 (Service Unavailable)

서버 과부하 또는 유지 관리로 인해 서버를 사용할 수 없음

### 504 (Gateway Timeout)

서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 제때 요청을 받지 못했다.

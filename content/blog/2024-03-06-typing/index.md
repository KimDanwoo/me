---
title: '덕 타이핑과 구조턱 타이핑 이해하기'
date: 2024-03-06
description: '덕 타이핑과 구조적 타이핑의 차이 이해하기'
thumbnail: './thumbnail.png'
category: 'typescript'
---

## 🪿 덕 타이핑

### 🐣 덕 타이핑 이란?

덕 타이핑이란, **내가 정의한 동작을 할 수 있다면 그 타입으로 인정해주는 것**이다. 어렵게 말하면 **객체의 변수, 메소드의 집합이 객체의 타입을 결정하는 것** 을 말한다.

### 🐣 덕 타이핑의 유래

이 말은 옛말에서 유래됐다.

> 오리처럼 걷고, 오리처럼 헤엄치고, 오리처럼 꽥꽥거린다면 아마도 오리일 것이다.

이것의 의미는 **오리처럼 행동하는 오리가 아닌 개체라도 행동을 강조하기 때문에 오리로 간주될 수 있다.** 비유하자면 컴퓨팅 언어의 경우 객체가 예상대로 동작하는 한 객체의 유형은 중요하지 않다. 이 동작은 객체의 메소드/속성에 의해 정의되는 반면 기대치는 메소드/속성 을 호출하는 사람들에 의해 설정된다.

### 🐣 덕 타이핑의 장단점

**덕타이핑은 일반적으로 객체 타입이 아니라 그 행동에 초점을 맞추기 때문에 코드의 유연성이 높아진다**. **다양한 타입의 객체를 같은 방식으로 처리할 수 있고**, **인터페이스나 상속 구조를 명시적으로 정의할 필요 없이, 필요한 메소드나 속성만을 구현함으로써 코드가 더 간결**해진다.

**런타임에 타입을 결정**하기 때문에, 컴파일 타입에 발생할수 있는 다양한 타입 관련 제약사항들에서 자유롭다.

하지만 일반적으로 동적 타이핑은 개발 시간을 단축 시킨다고 생각하는데. 상용구 코드가 적고, 해킹하기 쉽다. 정적 타이핑을 사용하면 컴파일 타임 검사로 인해 개발 프로세스가 느려진다. 더 나은 성능을 얻기 위해 나중에 정적 타이핑을 사용할 수 있다. 다른 사람들은 프로토타입 제작에만 덕 타이핑을 권장하고 생산에는 절대 권장하지 않는다.

컴파일 타임 검사가 잠재적인 문제를 조기에 파악하는 데 유용한 것은 사실이지만 덕 타이핑은 다음과 같은 코딩 규칙, 문서 및 테스트 기반 방법론을 적용한다.

덕 타이핑은 엄밀히 말하면 유형 시스템이 아니기 때문에 **프로그래머에게 유연성을 제공**한다. 예를들어 자바스크립트에서는 일반적인 것들을 코딩하기 더 간단하다. 정적 유형 언어는 인터페이스를 사용하지만 이러한 인터페이스에는 과도한 리팩토링이 포함될 수 있다.

## 💻 구조적 타이핑

### ⚙️ 구조적 타이핑 이란?

구조적 타이핑은 구조적 타입 시스템(Structural Type System) 이라고도 불린다. 실제 구조와 정의에 의해 결정되는 타입 시스템의 한 종류이다. 명시적 선언이나 이름을 기반을 하는 명목적 타입 시스템(Nominal Type System)인 Java, C#등과 다르다.

덕 타이핑과 유사한 개념이지만, **주로 정적 타이핑 시스템에서 컴파일 타입에 타입 체크를 수행하는데 사용**되고 주로 **TypeScript가 대표적인 예이**

### ⚙️ 구조적 타이핑의 장단점

다양한 타입의 객체가 **같은 구조를 가질 경우, 같은 코드를 재사용할 수 있어 유연성과 재사용성**이 향상되고, 객체가 **특정 인터페이스를 명시적으로 구현할 필요가 없으므로**, 타입 시스템이 더 간결해지고 사용하기 쉬워진다.

하지만 코드를 처음 접하는 사람이 객체가 어떤 인터페이스나 타입의 **요구사항을 충족하는지 즉시 이해하기 어렵고**, 구조적으로 타입이 결정되기 때문에 객체의 구조를 변경할 때 다른 코드에 미치는 영향을 정확히 예측하기 어렵고 리**펙토링이 복잡해질 수 있다.**

### 🆚 javaScript 와 typeScript

**자바스크립트는 대표적인 동적 타입 언어**로, 웹 개발에 많이 사용된다. 하지만 큰 규모의 애플리케이션을 개발할때 타입의 안정성 문제로 어려움을 겪기도 했다. 이를 해결하기 위해 타입스크립트가 2012년 등장했다. 타입스크립트는 자바스크립트에 정적 타입 시스템을 추가한 언어로, 구조적 타이핑을 기반으로 한다. 타입스크립트는 개발자가 타입 안정성을 유지하면서도 자바스크립트의 유연성을 누릴 수 있게 해줬다.

자바스크립트와 타입스크립트의 주요 차이점은 **타입을 결정하는 시점이 컴파일 타임이냐, 런타임**이냐에 따라 나뉜다. 자바스크립트는 **런타임때 동적으로 타입을 결정**하고 타입스크립트는 **컴파일 시점에 미리 타입을 결정**한다.
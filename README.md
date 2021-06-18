# Shopping Homepage

### React Shopping Web Page 🌹

##### - 가끔 npm 설치시 에러가 나는 경우 ↓

```
[npm ERR! Maximum call stack size exceeded] -> Error 날경우
→ npm cache clean --force // 캐시 지워주기
```

#### 📝 react-router-dom (웹브라우저에서 사용)

##### : 여러 페이지 구성하는 요소들이 있을 경우 사용자가 있는 URL 에 따라 렌더링 해야 하는데 는 UI 라이브러리로 라우팅을 제공하지 않아서 기능을 추가해줘야함

react-router-dom 설치 : `npm i react-router-dom`

```
import { BrowserRouter,Route,Link,Switch } from "react-router-dom";
```

- BrowserRouter : HTML5 의 `History API` 를 사용해 페이지를 새로고침하지 않고 주소를 변경할 수 있도록 해줌!
- Route : 주소에 따라 다른 화면을 보여주는 라우팅 기능을 가진 컴포넌트
  `<Route path="/이동할 주소" component={출력컴포넌트}/>`

  ```
   <Route path="/"  component={HomePage} />
   <Route path="/shop"  component={ShopPage} />
  ```

  위와 같이 Route 를 쓸 경우 HomePage 와 ShopPage 둘다 화면에 렌더링 되게 되는데 path='/shop' 에서 '/' 도 경로로 인식하게 되기 때문에 같은 화면에 출력되지 않게 하기 위해서는 `exact` 을 path="/" 에 추가

- Link : a 링크와 비슷하지만 페이지를 새로 불러오지 않고 유지한 상태에서 `History API`만을 사용하여 페이지의 주소만 변경해줌!

  ` <Link to='/이동할경로'>내용</Link>`

- Switch : Route로 생성된 자식컴포넌트중 매칭되는 첫번째 Route를 렌더링해줌!

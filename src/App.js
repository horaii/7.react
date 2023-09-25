import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Popup from "./components/Popup.jsx";
import './style.scss';
import { useState } from "react";


function App() {

	console.log('app')
	let [Name, setName] = useState('David')
	console.log(setName)
	
	return (
	<>
		<h1>{Name}</h1>
		<button onClick={()=>setName('Andy')}>이름변경</button>
	</>
	);
}

export default App;
/*
	hooks
	-리액트 16버전부터 새로나온 개념으로 자주쓰이는 상태관리, 생명주기에 관련된 내용들을 hook이라는 형태의 내장함수로 평의기능을 제공
	-hook이 나오기 전까지는 class방식으로 컴포넌트를 생성및 기능확장을 비효율적으로 처리

	자주쓰는 hook 3대장 
	useState - 컴포넌트의 화면의 렌더링을 담당한는 중요한
 */
/*
	SSR vs CSRnpm

	SSR - Server Side Rendering
	- 페이지 이동시마다 일일이 서버쪽에서 HTML파일을 요청해서 가져오는 방식
	- 장점 : 초기로딩속도가 빠름, 검색엔진 최적화 (SE0좋음)
	- 단점 : 페이지 이동시 마다 일일이 서버쪽에 파일을 요청해야 되므로 페이지가 깜빡거림

	CSR - Client Side Rendering
	- 초기화 빈 HTML파일을 서버쪽에서 가져오고 화면에 출력될 모든 데이터 요소를 자바스크립트로 Chunk 단위의 모든데이터 파일 가져온후 빈 HTML파일에 동적으로 출력
	- 장점 : 한번에 서브페이지를 포함한 모든 데이터를 불러오기 떄문에 페이지 이동시마다 새롭게 파일을 요청할 필요가 없기 떄문에 페이지 전환이 자연스러움
	- 단점 : 모든 페이지에 대한 데이터를 한번에 다 가져오기 떄문에 초기 로딩속도가 SSR방식에 비해서는 늦음, 검색엔진 최적화가안됨
	
	Real DOM(실제돔)
	- HTML태그를 이용하서 구조를 만들면 브라우저가 이를 해석해서 실제 DOM형태로 객체를 만들고 화면에 렌더링

	Virtual DOM(가상돔)
	- 브라우저에의해 Real DOM으로 변경되기 전 자바스크립트에 의해서 베모리상으로 가상의 DOM을 만들어서 기존의 DOM구조와 차이점을분석하고 바뀐 부분을 다시 렌더링하는 형태

	JSX
	- 리엑트에 DOM을 효율적으로 생성하기 위한 HTML의 규칙성을 따라한 자바스크립트 DOM제작방식

	컴포넌트 생성시 주의점
	- 무조건 JSX를 리턴
	- 함수 이름은 대문자로 시작
	- export 로 내보야지 다른 컴포넌트에서 불러올수 있음
	- 하나의 컴포넌트 함수는 단인 JSX를 리턴
*/

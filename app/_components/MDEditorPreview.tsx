'use client'

import dynamic from 'next/dynamic';

// 해당 코드는 Next.js의 dynamic 함수를 사용하여 @uiw/react-md-editor 패키지의 Markdown 컴포넌트를 동적으로 불러오고 있습니다.
// 이를 통해 해당 컴포넌트가 SSR (서버 사이드 렌더링)에 영향을 미치지 않도록 설정할 수 있습니다.
// dynamic 함수는 Next.js에서 사용되는 코드 스플리팅을 지원하며, 컴포넌트를 필요로 할 때만 로드하여 초기 번들 크기를 줄이는데 도움이 됩니다.
// 해석해보면:
// dynamic 함수의 첫 번째 매개변수는 동적으로 로드할 컴포넌트를 정의하는 함수입니다.
// 이 함수는 import() 구문을 사용하여 원하는 컴포넌트를 가져오고, then 메서드를 사용하여 모듈이 로드된 후에 해당 컴포넌트를 반환합니다.
// import("@uiw/react-md-editor")는 @uiw/react-md-editor 패키지를 가져오는 비동기 함수입니다.
// .then((mod) => { return mod.default.Markdown; })는 @uiw/react-md-editor 모듈이 로드된 후, 해당 모듈의 기본(default) 익스포트 중에서 Markdown 컴포넌트를 반환하는 콜백 함수입니다.
// 두 번째 매개변수인 { ssr: false }는 서버 사이드 렌더링(SSR)을 비활성화하는 옵션입니다.
// 이렇게 설정하면 해당 컴포넌트가 클라이언트 측에서만 로드되고, 서버 측에서는 렌더링되지 않습니다.
// 이는 @uiw/react-md-editor와 같이 브라우저 전용 라이브러리를 사용할 때 유용합니다.
// 따라서 EditerMarkdown 컴포넌트는 클라이언트 측에서 비동기적으로 로드되며, 서버 측 렌더링에는 영향을 미치지 않습니다.

const EditerMarkdown = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default.Markdown),
  { ssr: false }
);

export default function MDEditorPreview({ content }: any) {
  return (
    <EditerMarkdown
      style={{
        backgroundColor: 'transparent',
        marginBottom: '100px'
      }}
      source={content}
    />
  );
}
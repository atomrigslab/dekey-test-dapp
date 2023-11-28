# 프로젝트 개요
메타마스크 테스트 Dapp을 기반으로 작성되었으며, SKT 웹 지갑과의 Dapp 연동을 테스트하기 위해 사용됩니다. 

# 빌드 및 배포
정상적인 동작을 위해서는 .env 파일에서 WALLET_DOMAIN으로 지정한 지갑 사이트 도메인을 추가해야 합니다.
프로젝트를 빌드하려면 yarn build 명령을 실행하면 빌드된 파일이 docs 폴더에 생성됩니다. 이 코드를 main 브랜치에 업로드하면 GitHub 페이지를 통해 배포됩니다.

# Dekey Provider 초기화 방법

Dekey Provider를 초기화하려면 JavaScript 코드에서 @atomrigslab/dekey-web-wallet-provider 패키지를 먼저 import해야 합니다. 패키지를 import한 후, initializeDekeyProvider 함수를 WALLET_DOMAIN 매개변수와 함께 호출할 수 있습니다.

WALLET_DOMAIN은 Dapp이 iframe 안에 로드되지 않았을 경우, provider가 리디렉션할 도메인입니다.

다음은 provider를 초기화하는 예시입니다:

```
import '@atomrigslab/dekey-web-wallet-provider';
window.initializeDekeyProvider(process.env.WALLET_DOMAIN);
```

provider를 초기화한 후에는, Dapp은 eth_requestAccounts 메서드를 호출하여 계정을 요청할 수 있습니다. Dekey Provider는 필요한 경우 WALLET_DOMAIN으로 자동 리디렉션합니다.

다음은 Dekey Provider를 사용하여 계정을 요청하는 예시입니다:

```
const newAccounts = await dekey.request({
    method: 'eth_requestAccounts',
});
```


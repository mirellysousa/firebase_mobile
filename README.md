# Filmski — Checkpoint 4

Aplicativo Expo de catálogo de filmes com autenticação por e-mail e senha via Firebase Authentication. A sessão é controlada pelo `AuthContext`: sem usuário autenticado, o app mostra as telas de login e cadastro; com usuário autenticado, mostra o catálogo e a tela de configurações.

## Integrantes

- Substitua por **Nome completo — RM**
- Substitua por **Nome completo — RM**

## Funcionalidades entregues

- Cadastro com e-mail e senha pelo Firebase Authentication.
- Login com e-mail e senha pelo Firebase Authentication.
- Troca automática entre as rotas autenticadas e não autenticadas pelo `AuthContext` e `onAuthStateChanged`.
- Tela **Config** com o e-mail da conta autenticada e botão para sair.
- Variáveis do Firebase lidas de `.env`, sem chaves versionadas.

## Configuração do Firebase

1. Crie um projeto em [Firebase Console](https://console.firebase.google.com/).
2. Em **Authentication > Sign-in method**, habilite o provedor **E-mail/senha**.
3. Em **Configurações do projeto > Seus apps**, crie ou selecione o app Web e copie as configurações exibidas pelo Firebase.
4. Copie `.env.example` para um novo arquivo chamado `.env` na raiz do projeto.
5. Preencha todas as variáveis do `.env` com os valores da configuração do Firebase:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
EXPO_PUBLIC_FIREBASE_APP_ID=...
```

O `.env` é ignorado pelo Git. Nunca inclua credenciais reais no repositório.

## Executar

```bash
npm install
npm start
```

Para abrir diretamente em uma plataforma:

```bash
npm run android
npm run ios
npm run web
```

O catálogo consome `https://6414e8c38dade07073cb2a6a.mockapi.io/api/v1/movies`.

## Pull Request

No repositório da dupla, crie a branch pedida e envie a implementação:

```bash
git checkout -b checkpoint4
git add .
git commit -m "feat: adiciona autenticação Firebase"
git push -u origin checkpoint4
```

Depois, abra um Pull Request de `checkpoint4` para a branch principal do repositório.

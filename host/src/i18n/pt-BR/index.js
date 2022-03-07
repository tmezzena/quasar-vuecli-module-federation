import CouponList from "./models/CouponList";

export default {
  validations: {
    compare: "'{field}' e '{other}' não são iguais",
    email: "O campo {field} não possui um email válido",
    minLength: "O campo {field} deve ter no mínimo o tamanho {length}",
    required: "O campo {field} é requerido",
    strength: "Senha é muito fraca, por favor torne ela mais forte",
  },
  http: {
    generic: "Algo de errado aconteceu",
    badRequest:
      "Não foi possivel realizar esta ação, por favor revise os campos",
    unauthorized: "Você não está logado",
    forbidden: "Você não está autorizado a realizar esta ação",
    unprocessable: "@:http.badRequest",
    serverError: "Ocorreu um erro inesperado na API",
    serviceUnavailable:
      "Ocorreu um erro na API, possivelmente ao tentar acessar um serviço externo",
  },
  locale: {
    locale: "pt-br",
    title: "Idioma",
    ptbr: "Português",
    enus: "Inglês",
    shortDateMask: "##/##/####",
    shortDateFormat: "DD/MM/YYYY",
    shortDateTimeMask: "##/##/#### ##:##:##",
    shortDateTimeFormat: "DD/MM/YYYY HH:mm:SS",
    shortTimeMask: "##/##/#### ##:##:##",
    shortTimeFormat: "DD/MM/YYYY HH:mm:SS",
  },
  global: {
    waiting: "Aguarde",
  },
  oidc: {
    genericError: "Erro na autenticação",
  },
  userLinks: {
    logout: "Desconectar",
    logoutHint: "Desconectar do portal",
    manage: "Minha conta",
    manageHint: "Gerenciar meus dados",
    darkMode: "Modo escuro",
    darkModeHint: "Alternar entre modos",
  },
  menuLinks: {
    couponList: "Cupons",
    couponListHint: "Criar e gerenciar cupons",
    home: "Home",
    homeHint: "Página inicial",
  },
  terms: {
    coupon: "cupom",
    coupons: "cupons",
    empty: "vazio",
    loyaty: "fidelidade",
    loyaltyProgram: "níveis do fidelidade",
    loyaltyPrograms: "nível do fidelidade",
    movie: "filme",
    movies: "filmes",
    movieType: "tipo de filme",
    movieTypes: "tipos de filme",
    new: "novo",
    no: "não",
    partner: "parceiro",
    partners: "parceiros",
    place: "praça",
    places: "praças",
    product: "produto",
    products: "produtos",
    rede: "rede",
    redes: "redes",
    released: "liberado",
    sectorType: "tipo de setor",
    sectorTypes: "tipos de setor",
    ticket: "ingresso",
    tickets: "ingressos",
    yes: "sim",
    without: "sem",
  },
  models: {
    CouponList,
  },
};

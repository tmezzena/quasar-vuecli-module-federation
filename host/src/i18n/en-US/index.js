export default {
  validations: {
    compare: "{field} and {other} do not match",
    email: "The {field} field is not a valid e-mail address",
    minLength: "The {field} field should be at least length {length}",
    required: "The {field} field is required",
    strength: "Password is too weak, please improve your strength",
  },
  http: {
    generic: "Something not right happened",
    badRequest:
      "We aren't able of to do your request, please review all the fields",
    unauthorized: "You aren't authorized, please login",
    forbidden: "You aren't allowed to do that action",
    unprocessable: "@:http.badRequest",
    serverError: "An unexpected error occurred at the API",
    serviceUnavailable:
      "An error occurred at the API, mostly because a third party service",
  },
  locale: {
    locale: "en-US",
    title: "Idiom",
    ptbr: "Portuguese",
    enus: "English",
    shortDateMask: "##/##/####",
    shortDateFormat: "MM/DD/YYYY",
    shortDateTimeMask: "##/##/#### ##:##:##",
    shortDateTimeFormat: "MM/DD/YYYY HH:mm:SS",
    shortTimeMask: "##/##/#### ##:##:##",
    shortTimeFormat: "MM/DD/YYYY HH:mm:SS",
  },
  global: {
    waiting: "Waiting",
  },
  oidc: {
    genericError: "Error in authentication",
  },
  userLinks: {
    logout: "Sign out",
    logoutHint: "Sign out of portal",
    manage: "Manage user",
    manageHint: "Manage your user account",
  },
  menuLinks: {
    couponList: "Coupons",
    couponListHint: "Create and manage Coupons",
    home: "Home",
    homeHint: "Start page",
  },
};

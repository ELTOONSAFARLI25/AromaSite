const langCheck = {
  heroSection: {
    title: [
      "Məhsulun yoxlanılması",
      "Product Checkout",
      "Оформление заказа на продукцию",
    ],
    paragraph: ["Mağaza - Kassa", "Shop-Checkout", "Магазин-Касса"],
  },
  div1: {
    header: {
      paragraph: [
        "Qayıdan Müştəri?",
        "Returning Customer?",
        "Постоянный клиент?",
      ],
      link: [
        "Daxil olmaq üçün bura klikləyin",
        "Click here to login",
        "Нажмите здесь, чтобы войти",
      ],
    },
    body: {
      paragraph: [
        "Əgər daha əvvəl bizdən alış-veriş etmisinizsə, zəhmət olmasa aşağıdakı xanaları doldurun. Yeni müştərisinizsə, lütfən, Ödəniş və Çatdırılma bölməsinə keçin.",
        "If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.",
        "Если вы уже делали покупки у нас, пожалуйста, введите свои данные ниже. Если вы новый клиент, перейдите в раздел Оплата и Доставка.",
      ],
      emailInp: [
        "İstifadəçi adı və ya E-poçt*",
        "Username or Email*",
        "Имя пользователя или Email*",
      ],
      passwordInp: ["Şifrə", "Password", "Пароль"],
      loginBtn: ["Daxil ol", "Login", "Войти"],
      rememberMe: ["Məni yadda saxla", "Remember me", "Запомнить меня"],
      lostPassword: [
        "Şifrənizi unutmusunuz?",
        "Lost your password?",
        "Забыли пароль?",
      ],
    },
  },
  div2: {
    header: {
      paragraph: ["Kuponunuz var?", "Have a coupon?", "У вас есть купон?"],
      link: [
        "Kodunuzu daxil etmək üçün bura klikləyin",
        "Click here to enter your code",
        "Нажмите здесь, чтобы ввести код",
      ],
    },
    body: {
      couponCodeInp: [
        "Kupon kodunu daxil edin",
        "Enter coupon code",
        "Введите код купона",
      ],
      applyBtn: ["Kuponu Tətbiq Et", "Apply Coupon", "Применить купон"],
    },
  },
  billingDetails: {
    title: ["Faktura Məlumatları", "Billing Details", "Платёжные данные"],
    firstName: ["Ad", "First Name", "Имя"],
    lastName: ["Soyad", "Last Name", "Фамилия"],
    companyName: ["Şirkət Adı", "Company Name", "Название компании"],
    addressLine1: ["Ünvan Sətiri-1", "Address Line-1", "Адрес (строка 1)"],
    addressLine2: ["Ünvan Sətiri-2", "Address Line-2", "Адрес (строка 2)"],
    countrySelect: {
      country: ["Ölkə", "Country", "Страна"],
      azerbaijan: ["Azərbaycan", "Azerbaijan", "Азербайджан"],
      turkey: ["Türkiyə", "Turkey", "Турция"],
      bangladesh: ["Banqladeş", "Bangladesh", "Бангладеш"],
    },
    city: ["Şəhər", "City", "Город"],
    region: ["Bölgə", "Region", "Регион"],
    district: ["Rayon", "District", "Район"],
    postcode: ["Poçt Kodu", "Postcode/ZIP", "Почтовый индекс"],
    createAccount: [
      "Hesab yaratmaq?",
      "Create an account?",
      "Создать аккаунт?",
    ],
    shippingDetails: [
      "Çatdırılma Məlumatları",
      "Shipping Details",
      "Данные для доставки",
    ],
    shippingCheckbox: [
      "Fərqli ünvana göndərilsin?",
      "Ship to a different address?",
      "Доставить по другому адресу?",
    ],
    orderMessage: ["Sifariş Qeydləri", "Order Notes", "Примечания к заказу"],
  },
  order: {
    title: ["Sifarişiniz", "Your Order", "Ваш заказ"],
    table: {
      thead: {
        product: ["Məhsul", "Product", "Товар"],
        quantity: ["Miqdar", "Quantity", "Кол-во"],
        total: ["Cəmi", "Total", "Итого"],
      },
      tbody: {
        subtotal: ["Cəmi", "Subtotal", "Промежуточный итог"],
        shipping: ["Çatdırılma", "Shipping", "Доставка"],
        flat_rate: ["Sabit Tarif", "Flat Rate", "фикс. ставка"],
      },
      tfoot: {
        total: ["Cəmi", "Total", "Итого"],
      },
    },
    checkPayment: {
      title: ["Çeklə Ödəniş", "Check Payments", "Оплата чеком"],
      paragraph: [
        "Zəhmət olmasa, Mağaza Adı, Mağaza Küçəsi, Mağaza Şəhəri, Mağaza Ştatına / Rayonuna, Mağaza Poçt Koduna çek göndərin.",
        "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
        "Пожалуйста, отправьте чек на название магазина, улицу магазина, город магазина, штат/округ магазина, почтовый индекс магазина.",
      ],
    },
    paypal: {
      title: ["PayPal", "PayPal", "PayPal"],
      paragraph: [
        "PayPal vasitəsilə ödəniş; PayPal hesabınız yoxdursa, kredit kartınızla ödəyə bilərsiniz.",
        "Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.",
        "Оплатите через PayPal. Если у вас нет учетной записи PayPal, вы можете оплатить ее с помощью кредитной карты.",
      ],
    },
    terms: [
      "Şərtləri oxudum və qəbul edirəm",
      "I’ve read and accept the terms & conditions",
      "Я прочитал(а) и принимаю условия и положения",
    ],
    proceedBtn: ["Ödənişə keç", "Proceed to Payment", "Перейти к оплате"],
  },
};
export default langCheck;

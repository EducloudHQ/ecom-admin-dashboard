/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReviewsRating = /* GraphQL */ `
  mutation CreateReviewsRating(
    $input: CreateReviewsRatingInput!
    $condition: ModelReviewsRatingConditionInput
  ) {
    createReviewsRating(input: $input, condition: $condition) {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateReviewsRating = /* GraphQL */ `
  mutation UpdateReviewsRating(
    $input: UpdateReviewsRatingInput!
    $condition: ModelReviewsRatingConditionInput
  ) {
    updateReviewsRating(input: $input, condition: $condition) {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteReviewsRating = /* GraphQL */ `
  mutation DeleteReviewsRating(
    $input: DeleteReviewsRatingInput!
    $condition: ModelReviewsRatingConditionInput
  ) {
    deleteReviewsRating(input: $input, condition: $condition) {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      orderDetails
      orderStatus
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      orderDetails
      orderStatus
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      orderDetails
      orderStatus
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      productId
      productQty
      productPrice
      cartTotal
      User {
        id
        firstName
        lastName
        email
        address
        sub
        isActive
        phone
        userType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userReviewsRatingId
        __typename
      }
      Order {
        id
        orderItems
        orderDetails
        orderStatus
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderPaymentId
        orderCartId
        __typename
      }
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      productId
      productQty
      productPrice
      cartTotal
      User {
        id
        firstName
        lastName
        email
        address
        sub
        isActive
        phone
        userType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userReviewsRatingId
        __typename
      }
      Order {
        id
        orderItems
        orderDetails
        orderStatus
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderPaymentId
        orderCartId
        __typename
      }
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      productId
      productQty
      productPrice
      cartTotal
      User {
        id
        firstName
        lastName
        email
        address
        sub
        isActive
        phone
        userType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCartId
        userReviewsRatingId
        __typename
      }
      Order {
        id
        orderItems
        orderDetails
        orderStatus
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderPaymentId
        orderCartId
        __typename
      }
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      isParent
      parentCategoryId
      categoryImageUrl
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      isParent
      parentCategoryId
      categoryImageUrl
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      isParent
      parentCategoryId
      categoryImageUrl
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      Orders {
        nextToken
        startedAt
        __typename
      }
      Payments {
        nextToken
        startedAt
        __typename
      }
      ReviewsRating {
        id
        review
        stars
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      Orders {
        nextToken
        startedAt
        __typename
      }
      Payments {
        nextToken
        startedAt
        __typename
      }
      ReviewsRating {
        id
        review
        stars
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        cartStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartOrderId
        cartUserId
        __typename
      }
      Orders {
        nextToken
        startedAt
        __typename
      }
      Payments {
        nextToken
        startedAt
        __typename
      }
      ReviewsRating {
        id
        review
        stars
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      name
      logoUrl
      fontType
      hero
      description
      ownerEmail
      ownerAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      name
      logoUrl
      fontType
      hero
      description
      ownerEmail
      ownerAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      name
      logoUrl
      fontType
      hero
      description
      ownerEmail
      ownerAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEmailNotification = /* GraphQL */ `
  mutation CreateEmailNotification(
    $input: CreateEmailNotificationInput!
    $condition: ModelEmailNotificationConditionInput
  ) {
    createEmailNotification(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEmailNotification = /* GraphQL */ `
  mutation UpdateEmailNotification(
    $input: UpdateEmailNotificationInput!
    $condition: ModelEmailNotificationConditionInput
  ) {
    updateEmailNotification(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEmailNotification = /* GraphQL */ `
  mutation DeleteEmailNotification(
    $input: DeleteEmailNotificationInput!
    $condition: ModelEmailNotificationConditionInput
  ) {
    deleteEmailNotification(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

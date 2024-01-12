export const SERVER_ERROR = {
  EMAIL_ALREADY_EXIST: 'emailAlreadyExist',
  EMAIL_NOT_EXIST: 'emailNotExist',
  IMAGE_IS_NOT_VALID: 'imageIsNotValid',
  TOPIC_IS_NOT_VALID: 'topicIsNotValid',
  POST_IS_NOT_VALID: 'postIsNotValid',
  PAGE_IS_NOT_VALID: 'pageIsNotValid',
  CATEGORY_IS_NOT_VALID: 'categoryIsNotValid',
  PARENT_IS_NOT_VALID: 'parentIsNotValid',
  CHILD_IS_NOT_VALID: 'childIsNotValid',
  STATUS_IS_NOT_VALID: 'statusIsNotValid',
  FEATURED_IMAGE_NOT_VALID: 'featuredImageIsNotValid',
  ROLE_IS_NOT_VALID: 'roleIsNotValid',
  SUPERADMIN_IS_NOT_ALLOWED: 'superAdminIsNotAllowed',
  INCLUDE_IS_NOT_VALID: 'includeIsNotValid',
  COLUMN_IS_NOT_VALID: 'columnIsNotValid',
  TITLE_MUST_BE_UNIQUE: 'titleMustBeUnique',
  TITLE_SHOULD_BE_NOT_EMPTY: 'title should not be empty',
  SLUG_MUST_BE_UNIQUE: 'slugMustBeUnique',
  RELATION_IS_NOT_SET: 'relationIsNotSet',
  CONFIRMATION_TOKEN_HAS_EXPIRED: 'confirmationTokenHasExpired',
  USER_IS_NOT_EXIST: 'userIsNotExist',
  USER_IS_NOT_CONFIRMED: 'userIsNotConfirmed',
  PASSWORD_IS_NOT_MATCH:
    'The password must contain at least one uppercase letter, one lowercase letter, one number, and be between 8 and 20 characters long',
  SLUG_SHOULD_BE_UNIQUE: 'slugMustBeUnique',
} as const;

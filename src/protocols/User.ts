export type UserEntity = {
    id: number ,
    name: string,
    email: string,
    password: string,
    cpf: string,
    prof_picture: number
}

export type UserPartial = Partial<UserEntity> | Omit<UserEntity,'id'>

export type User = Omit<UserEntity,'id'>

export type UserLogin = Omit<UserEntity,'id'|'name'|'cpf'|'prof_picture'>

export type ProfilePictureEntity = {
    id :     number,
    picture: string
}
export type UserPicture = (UserEntity | ProfilePictureEntity)

import { Decimal } from "@prisma/client/runtime"

export type GradeEntity = {
    id: number ,
    game_id: number,
    user_id: number,
    grade: Decimal
}
export type GradeAvg = {
    _avg:{
        grade: Decimal
    }
}

export type GradePartial = Partial<GradeEntity> | Omit<GradeEntity,'id'>

export type Grade = Omit<GradeEntity,'id'>

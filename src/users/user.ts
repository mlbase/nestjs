import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({
    engine: "InnoDb",
    schema: "social_user"
})
export class User {
    @PrimaryGeneratedColumn({primaryKeyConstraintName: "user_id"})
    id: number

    @Column({type: 'timestamptz' , nullable: false})
    reg_date: Date

    @Column({type: 'timestamptz'})
    upt_date: Date

    @Column()
    address: string

    @Column({unique: true})
    email: string

    @Column({unique: true})
    username: string

    @Column()
    password: string
}
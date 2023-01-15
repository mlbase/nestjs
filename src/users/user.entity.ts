import { Entity, Column, PrimaryGeneratedColumn, Unique, BeforeInsert } from "typeorm";

@Entity({
    engine: "InnoDb",
    schema: "social_user"
})
export class User {
    @PrimaryGeneratedColumn({primaryKeyConstraintName: "user_id"})
    id: number

    @Column({type: "timestamp" , nullable: false})
    reg_date: Date

    @Column({type: 'timestamp', nullable: true})
    update_date: Date

    @Column()
    address: string

    @Column({unique: true})
    email: string

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @BeforeInsert()
    setRegDate() {
        this.reg_date = new Date();
    }
}
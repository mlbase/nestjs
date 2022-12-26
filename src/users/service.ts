import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { User } from "./user";
import * as bcrypt from "bcrypt";
import { table } from "console";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private datasource: DataSource
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async remove(username: string): Promise<void> {
        await this.userRepository.delete(username);
    }

    async findOneByUserName(username: string): Promise<User> {
        return await this.userRepository.findOneByOrFail({username});
    }

    async updatePassword(username: string, password: string, updatePassword: string): Promise<void> {
        const queryRunner = this.datasource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const find_user = await this.findOneByUserName(username);
            const isMatch = await bcrypt.compare(password, find_user.password);
            if (!isMatch){
                throw Error
            }
            const hashPassword = await bcrypt.hash(updatePassword, 5)
            await queryRunner.query(
                "UPDATE social_user SET password = :password Where username = :username",
                [hashPassword, username]
            );
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }
}
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { UserService, UserPayload } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  createUser(@Body() userInfo: UserPayload) {
    return this.userService.createUser(userInfo);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userUpdateInfo: UserPayload) {
    return this.userService.updateUser(Number(id), userUpdateInfo);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}

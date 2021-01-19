import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto'

// Basic CRUD route examples
@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item: ${id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, Qty: ${createItemDto.qty}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete item with id: ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update item: ${id} - Name: ${updateItemDto.name}`;
    }
}

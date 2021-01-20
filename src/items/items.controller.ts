import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

// Basic CRUD route examples

// Controller defines the endpoints and calls methods from service
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
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

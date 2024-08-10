import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Invoice } from './entities/invoice.entity';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(
    @Body() createExampleDto: { name: string; description: string },
  ): Promise<Invoice> {
    return this.invoiceService.create(
      createExampleDto.name,
      createExampleDto.description,
    );
  }

  @Get()
  findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Invoice> {
    return this.invoiceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateExampleDto: { name: string; description: string },
  ): Promise<Invoice> {
    return this.invoiceService.update(
      id,
      updateExampleDto.name,
      updateExampleDto.description,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }
}

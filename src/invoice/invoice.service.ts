import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  create(name: string, description: string): Promise<Invoice> {
    const example = this.invoiceRepository.create({ name, description });
    return this.invoiceRepository.save(example);
  }

  findAll(): Promise<Invoice[]> {
    return this.invoiceRepository.find();
  }

  findOne(id: number): Promise<Invoice> {
    return this.invoiceRepository.findOneBy({ id });
  }

  async update(
    id: number,
    name: string,
    description: string,
  ): Promise<Invoice> {
    const example = await this.invoiceRepository.findOneBy({ id });
    if (example) {
      example.name = name;
      example.description = description;
      return this.invoiceRepository.save(example);
    }
    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}

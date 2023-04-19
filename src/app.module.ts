import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TrucksModule } from './modules/trucks/trucks.module';

// Here I call all of the modules to be used
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TrucksModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

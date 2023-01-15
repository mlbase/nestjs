import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('swagger user')
        .setDescription('swagger of api')
        .setVersion('1.0')
        .addTag('tutorial')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'Token'
            },
            'access-token',
        )
        .addBasicAuth()
        .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};
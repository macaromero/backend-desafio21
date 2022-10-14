import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { blue, red, yellow, green, gray, cyan } from "https://deno.land/std@0.159.0/fmt/colors.ts";

serve(handler, { port: 8080 });

async function handler(req: Request): Promise<Response> {

    const url = new URL(req.url);
    let frase = url.searchParams.get('frase');
    const {color} = await req.json();
    const colorLowerCase = color.toLowerCase();

    switch (colorLowerCase) {
        case 'azul':
            console.log(`Frase: ${blue(frase)}`);
            console.log(`Color: ${blue(colorLowerCase)}`);
            return new Response(blue(frase));

        case "rojo":
            console.log(`Frase: ${red(frase)}`);
            console.log(`Color: ${red(colorLowerCase)}`);
            return new Response(red(frase));

        case 'amarillo':
            console.log(`Frase: ${yellow(frase)}`);
            console.log(`Color: ${yellow(colorLowerCase)}`);
            return new Response(yellow(frase));

        case "gris":
            console.log(`Frase: ${gray(frase)}`);
            console.log(`Color: ${gray(colorLowerCase)}`);
            return new Response(gray(frase));

        case "verde":
            console.log(`Frase: ${green(frase)}`);
            console.log(`Color: ${green(colorLowerCase)}`);
            return new Response(green(frase));

        case "celeste":
            console.log(`Frase: ${cyan(frase)}`);
            console.log(`Color: ${cyan(colorLowerCase)}`);
            return new Response(cyan(frase));
    
        default:
            console.log("No ingresaste un color válido. Tiene que ser azul, gris, rojo, amarillo, celeste o verde.");
            return new Response("No ingresaste un color válido. Tiene que ser azul, gris, rojo, amarillo, celeste o verde.");
    }
  }
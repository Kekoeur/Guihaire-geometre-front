"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DisplayForm, InputFormElt, Paragraph} from '@/types/api';
import RenderParagraphText from '@/utils/displayUtils';

// ✅ Fonction qui génère dynamiquement le schéma en fonction du formulaire
const generateFormSchema = (inputs: InputFormElt[]) => {
    let schemaObj: Record<string, z.ZodTypeAny> = {};
  
    inputs.forEach((input) => {
      switch (input.Type) {
        case "Text":
          schemaObj[input.DataName] = z.string().min(2, "Minimum 2 caractères").max(100, "Max 100 caractères");
          break;
        case "LongText":
          schemaObj[input.DataName] = z.string().min(10, "Minimum 10 caractères");
          break;
        case "Phone":
          schemaObj[input.DataName] = z.string().regex(/^\+?[0-9]{7,15}$/, "Numéro invalide");
          break;
        case "Address":
          schemaObj[input.DataName] = z.string().min(5, "Addresse trop courte").max(200, "Addresse trop longue");
          break;
        case "Mail":
          schemaObj[input.DataName] = z.string().email("Email invalide");
          break;
        case "Files":
          schemaObj[input.DataName] = z
            .any()
            .refine((files) => files.length > 0, "Fichier requis")
            .refine((files) => files[0]?.size <= 5 * 1024 * 1024, "Fichier trop volumineux (max 5MB)");
          break;
        default:
          break;
      }
    });
  
    return z.object(schemaObj);
  };
  
  const renderDisplayForm: React.FC<DisplayForm> = (props) => {
    const Component = props;
  
    // ✅ Génération dynamique du schéma
    const formSchema = generateFormSchema(Component.Form.InputElt);
    type FormData = z.infer<typeof formSchema>;
  
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(formSchema),
    });
  
    const onSubmit = (data: FormData) => {
      //console.log("Form Data:", data);
    };

    const renderInput = (InputElt: InputFormElt) => {
        switch (InputElt.Type) {
          case "Text":
            return (
              <input
                type="text"
                {...register(InputElt.DataName)}
                placeholder={InputElt.Placeholder.Text}
                className="border p-2 w-full"
              />
            );
          case "LongText":
            return (
              <textarea
                {...register(InputElt.DataName)}
                placeholder={InputElt.Placeholder.Text}
                className="border p-2 w-full h-24"
              />
            );
          case "Phone":
            return (
              <input
                type="tel"
                {...register(InputElt.DataName)}
                placeholder={InputElt.Placeholder.Text}
                className="border p-2 w-full"
              />
            );
          case "Address":
            return (
              <input
                type="text"
                {...register(InputElt.DataName)}
                placeholder={InputElt.Placeholder.Text}
                className="border p-2 w-full"
              />
            );
          case "Mail":
            return (
              <input
                type="email"
                {...register(InputElt.DataName)}
                placeholder={InputElt.Placeholder.Text}
                className="border p-2 w-full"
              />
            );
          case "Files":
            return (
              <>
                <input type="file" {...register(InputElt.DataName)} className="border p-2 w-full" />
                {watch(InputElt.DataName)?.[0] && (
                  <p className="mt-2">Fichier sélectionné : {watch(InputElt.DataName)[0].name}</p>
                )}
              </>
            );
          default:
            return null;
        }
    };

    return (
        <section className="form">
        <h2>{Component.Title}</h2>
        <RenderParagraphText paragraphs={Component.Text as Paragraph[]} />
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-lg">
            <div className="grid grid-cols-12 gap-4">
            {Component.Form.InputElt.map((InputElt, index) => (
                <div key={index} className={`col-span-${InputElt.Size || 12}`}>
                    <label className="block">{InputElt.Name}</label>
                    {renderInput(InputElt)}
                    {errors[InputElt.DataName]?.message && (
                        <p className="text-red-500">{String(errors[InputElt.DataName]?.message)}</p>
                    )}
                </div>
            ))}
            </div>
            <div>
            {Component.Form.FormButton.map((BtnElt, index) => {
                switch (BtnElt.RedirUrl) {
                case "/send":
                    return (
                    <button key={index} type="submit" className="bg-blue-500 text-white p-2 rounded">
                        {BtnElt.Text}
                    </button>
                    );
                case "/reset":
                    return (
                    <button
                        key={index}
                        type="reset"
                        className="bg-gray-500 text-white p-2 rounded"
                        onClick={() => reset()}
                    >
                        {BtnElt.Text}
                    </button>
                    );
                default:
                    return null;
                }
            })}
            </div>
        </form>
    </section>
  );
};

export default renderDisplayForm;
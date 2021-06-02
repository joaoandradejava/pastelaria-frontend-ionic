export class ValidadorFormulario {
  public static getMensagemCampoObrigatorio(label: string): string {
    return `Preencha o campo ${label}!`;
  }

  public static getMensagemCampoTamanhoCaracteres(
    label: string,
    min: number,
    max: number
  ): string {
    return `O campo ${label} tem que ter um tamanho entre ${min} á ${max} caracteres!`;
  }

  public static getMensagemCampoInvalido(label: string): string {
    return `${label} inválido!`;
  }
}

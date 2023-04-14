import { Api } from "../APIConfig";
import { APIException } from "../APIException";

export interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

// passa como parametro um objeto ITarefa omitindo o atribudo id
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | APIException> => {
  try {
    const { data } = await Api().post<any>('/tarefas', dataToCreate);
    return data;
  } catch (error: any) {
    return new APIException(error.message || "Erro ao criar registro na API :/");
  }
};

// caso a Promise nao retorne nenhuma lista de tarefas, deve retornar alguma exception
const getAll = async (): Promise<ITarefa[] | APIException> => {
  try {
    const { data } = await Api().get('/tarefas');
    return data;
  } catch (error: any) {
    return new APIException(error.message || "Erro ao consultar à API :/");
  }
};

const getById = async (id: number): Promise<ITarefa | APIException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new APIException(error.message || "Erro ao consultar o registro na API :/");
  }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | APIException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new APIException(error.message || "Erro ao atualizar o resgistro na API :/");
  }
};

const deteleById = async (id: number): Promise<undefined | APIException> => {
  try {
    await Api().delete(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new APIException(error.message || "Erro ao remover registro da API :/");
  }
};

export const TarefasService = {
  create,
  getAll,
  getById,
  updateById,
  deteleById
};
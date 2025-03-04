'use client';

import {DivInterestsFormInterface} from '../interfaces';
import {OptionType, Errors} from '../../interfaces';
import {useMemo, useState, useRef} from 'react';
import ErrorAuth from '../../components/ErrorAuth';

export default function DivInterestsForm(props: DivInterestsFormInterface){
    const formRegister = props.formRegister;
    const formInputs = props.formInputs;
    const setFormInputs = props.setFormInputs;
    const errors: Errors[] = props.errors;

    const opcoes = useMemo<OptionType[]>(() => {
        return (
            [
                // Grupos sociais
                { value: 'familia', label: 'Família' },
                { value: 'amigos', label: 'Amigos' },
                { value: 'vizinhos', label: 'Vizinhos' },
                { value: 'casais', label: 'Casais' },
                { value: 'maternidade', label: 'Maternidade e Paternidade' },
                { value: 'criancas', label: 'Crianças e Bebês' },
            
                // Grupos acadêmicos e educacionais
                { value: 'escola', label: 'Escola' },
                { value: 'faculdade', label: 'Faculdade' },
                { value: 'cursos_online', label: 'Cursos Online' },
                { value: 'idiomas', label: 'Idiomas' },
                { value: 'concursos', label: 'Concursos Públicos' },
                { value: 'vestibulares', label: 'Vestibulares e ENEM' },
                { value: 'tutoria', label: 'Tutoria e Mentoria' },
            
                // Grupos profissionais
                { value: 'trabalho', label: 'Trabalho' },
                { value: 'empresas', label: 'Empresas' },
                { value: 'freelancers', label: 'Freelancers' },
                { value: 'networking', label: 'Networking' },
                { value: 'carreiras', label: 'Carreiras e Profissões' },
                { value: 'vagas', label: 'Vagas de Emprego' },
            
                // Grupos de hobbies e lazer
                { value: 'esporte', label: 'Esporte' },
                { value: 'corrida', label: 'Corrida e Caminhada' },
                { value: 'ciclismo', label: 'Ciclismo' },
                { value: 'musculacao', label: 'Musculação' },
                { value: 'danca', label: 'Dança' },
                { value: 'lazer', label: 'Lazer' },
                { value: 'musica', label: 'Música' },
                { value: 'filmes_series', label: 'Filmes e Séries' },
                { value: 'games', label: 'Games e E-Sports' },
                { value: 'livros', label: 'Livros e Literatura' },
                { value: 'teatro', label: 'Teatro e Arte Cênica' },
                { value: 'fotografia', label: 'Fotografia' },
                { value: 'culinaria', label: 'Culinária e Receitas' },
            
                // Grupos de tecnologia
                { value: 'tecnologia', label: 'Tecnologia' },
                { value: 'programacao', label: 'Programação' },
                { value: 'desenvolvimento_web', label: 'Desenvolvimento Web' },
                { value: 'mobile', label: 'Desenvolvimento Mobile' },
                { value: 'startup', label: 'Startups e Inovação' },
                { value: 'seguranca', label: 'Segurança da Informação' },
                { value: 'blockchain', label: 'Blockchain e Criptomoedas' },
                { value: 'iot', label: 'Internet das Coisas (IoT)' },
            
                // Grupos de saúde e bem-estar
                { value: 'saude', label: 'Saúde e Bem-estar' },
                { value: 'fitness', label: 'Fitness e Treinamento' },
                { value: 'nutricao', label: 'Nutrição' },
                { value: 'meditacao', label: 'Meditação e Mindfulness' },
                { value: 'yoga', label: 'Yoga' },
                { value: 'psicologia', label: 'Psicologia e Autoajuda' },
            
                // Grupos de viagens e turismo
                { value: 'turismo', label: 'Turismo e Viagens' },
                { value: 'intercambio', label: 'Intercâmbio' },
                { value: 'trilhas', label: 'Trilhas e Aventura' },
                { value: 'camping', label: 'Camping' },
            
                // Grupos de animais e natureza
                { value: 'animais', label: 'Animais e Pets' },
                { value: 'vegetarianismo', label: 'Vegetarianismo e Veganismo' },
                { value: 'ecologia', label: 'Ecologia e Sustentabilidade' },
            
                // Grupos de interesses específicos
                { value: 'politica', label: 'Política' },
                { value: 'religiao', label: 'Religião' },
                { value: 'astrologia', label: 'Astrologia' },
                { value: 'voluntariado', label: 'Voluntariado' },
                { value: 'projetos_sociais', label: 'Projetos Sociais' },
                { value: 'debates', label: 'Debates e Discussões' },
            
                // Grupos comerciais e de vendas
                { value: 'compras', label: 'Compras e Vendas' },
                { value: 'ofertas', label: 'Ofertas e Promoções' },
                { value: 'empreendedorismo', label: 'Empreendedorismo' },
                { value: 'dropshipping', label: 'Dropshipping e E-commerce' },
                { value: 'investimentos', label: 'Investimentos e Finanças' },
            
                // Grupos variados
                { value: 'humor', label: 'Humor e Memes' },
                { value: 'curiosidades', label: 'Curiosidades' },
                { value: 'papo_furado', label: 'Papo Furado e Bate-papo' },
                { value: 'conselhos', label: 'Conselhos e Dicas' },
                { value: 'outros', label: 'Outros' },
            ]
        )
    }, []);

    const [interestsSearch, setInterestsSearch] = useState('');
    const [interestsDropbox, setInterestsDropbox] = useState(0);
    const inputInterestsSearch = useRef<HTMLInputElement>(null);

    const handleInputInterestsEnter = () => {
        if(interestsDropbox === 0){
            setInterestsDropbox(1);
        }
    }

    const handleInputInterestsLeave = () => {
        if(interestsDropbox === 1){
            setInterestsDropbox(0);
            inputInterestsSearch.current?.blur();
        }
    }

    const handleChangeInputsInterestsAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            const checkboxes = formRegister?.current?.querySelectorAll<HTMLInputElement>('.interests-checkbox');
            let arrayValores: string[] = [];
            if(checkboxes){
                arrayValores = Array.from(checkboxes).map((checkbox) => checkbox.value.toUpperCase());
                setFormInputs({...formInputs, interests: arrayValores});
            }
        } else{
            setFormInputs({...formInputs, interests: []});
        }
    }

    const handleChangeInputsInterests = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxes = formRegister?.current?.querySelectorAll<HTMLInputElement>('.interests-checkbox');
        let arrayValores: string[] = [];
        if(checkboxes){
            arrayValores = Array.from(checkboxes).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value.toUpperCase());
            setFormInputs({...formInputs, interests: arrayValores});
        }
    }

    return (
        <>
            <div id='interests-box' onMouseLeave={handleInputInterestsLeave}>
                <input type="text"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInterestsSearch(e.target.value);
                }}
                onFocus={handleInputInterestsEnter}
                name="interests-search" ref={inputInterestsSearch} id="interests-search" 
                placeholder={
                    formInputs.interests && formInputs.interests.length === 1
                    ? `1 interesse selecionado` 
                    : `${formInputs.interests.length === 0
                        ? 'Selecione seu interesse'
                        : `${formInputs.interests.length} interesses selecionados` 
                    }`
                }/>
                {interestsDropbox === 1 &&
                    <div id='interests-dropbox'>
                    {
                        interestsSearch === ''
                        &&
                        <label>
                            <input type="checkbox" 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChangeInputsInterestsAll(e);
                            }} checked={formInputs.interests.length === opcoes.length ? true : false}/>
                            <p>
                            Selecione todas as opções
                            </p>
                        </label>
                    }
                    {opcoes.map((opcao) => {
                        if(opcao.value.toLowerCase().indexOf(interestsSearch.toLowerCase()) != -1){
                            return (
                                <label key={opcao.value.toUpperCase()}>
                                    <input type="checkbox" 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleChangeInputsInterests(e);
                                    }} 
                                    name='interests' 
                                    checked={formInputs.interests.indexOf(opcao.value.toUpperCase()) !== -1 ? true : false}
                                    className='interests-checkbox' value={opcao.value.toUpperCase()} />
                                    <p>
                                    {opcao.label}
                                    </p>
                                </label>
                            )
                        } 
                    })}
                </div>
                }
            </div>
            <ErrorAuth errors={errors} type='interests'/>
        </>
    )
}
<template>
    <div>
        <CPanelExpansion title="Criterios de busquedas">
            <v-row>
                <v-col cols="12" sm="4">
                    <label for="">Comite</label>
                    <v-autocomplete
                        :items="['Primer Comite','Segundo Comite','Tercer Comite']"
                        solo
                        autocomplete="off"
                        outlined
                        dense
                        placeholder="Escribe y selecciona un opticón"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="4">
                    <label for="">Tipo de Comite</label>
                    <v-text-field
                        solo
                        autocomplete="off"
                        outlined
                        label="Escribe para buscar"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <br>
                    <v-btn  color="#002b4d" dark>
                        Aplicar filtros
                    </v-btn>
                </v-col>
            </v-row>
        </CPanelExpansion>
        <br>
        <CPanelExpansion
            title="Actividades predefinidas"
            ref="heightContainerTable"
        >
            <v-row>
                <v-col cols="12" sm="6">
                    <label>Buscar</label>
                    <v-text-field
                        v-model="search"
                        solo
                        outlined
                        autocomplete="off"
                        dense
                        placeholder="Escribe para buscar..."
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <br>
                    <div class="shortStyle">
                       
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="()=> {}"
                        >
                            <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
                        </v-btn>
                        </template>
                    <span>Agregar</span>
                    </v-tooltip>


                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :disabled="isDisableEditButton"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="()=> {}"
                        >
                            <v-icon>mdi-pencil-box-outline</v-icon>
                        </v-btn>
                        </template>
                    <span>Editar</span>
                    </v-tooltip>

                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :disabled="isDisableOptionButton"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="()=> {}"
                        >
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                        </template>
                    <span>Eliminar</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :disabled="isDisableOptionButton"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="()=> {}"
                        >
                            <v-icon>mdi-file-document-outline</v-icon>
                        </v-btn>
                        </template>
                    <span>Minutas</span>
                    </v-tooltip>

                    <!-- <c-button-icon 
                        title="Agregar" 
                        icon="mdi-file-document-outline"  
                        :disabled="true"
                        @click="()=> {}"
                    ></c-button-icon> -->

                    <!-- <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :disabled="isDisableOptionButton"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="()=> {}"
                        >
                            <v-icon>mdi-upload-outline</v-icon>
                        </v-btn>
                        </template>
                    <span>Cargar Archivos</span>
                    </v-tooltip> -->
                    <CFileUploads @files="uploadFiles" :loading="loading" v-model="openDialog" >
                        <template>
                            <v-btn @click="upload" text color="primary" >Subir Archivos</v-btn>
                            <v-btn @click="openDialog = false" text color="error" >Cerrar</v-btn>
                        </template>
                        <!-- <template v-slot:actions>
                            <v-btn text color="error" >Cerrar</v-btn>
                            <v-btn text color="primary" >Guardar Archivos</v-btn>
                        </template> -->
                    </CFileUploads>


                   
                    </div>
                </v-col>
            </v-row>

            <v-data-table
                :search="search"
                v-model="selected"
                fixed-header
                height="400"
                :headers="headers"
                :items="items"
                :items-per-page="8000"
                :single-select="false"
                show-select
                class="elevation-0"
                item-key="id"
            >
                <template v-slot:[`item.n`]="{index}">
                    {{ index + 1 }}
                </template>
                <!-- <template v-slot:[`item.actions`]="{item}">
                    <v-btn
                        color="primary"
                        icon
                        @click="event(item)"
                    >
                        <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
                    </v-btn>

                    <v-btn
                        color="primary"
                        icon
                        @click="event(item)"
                    >
                        <v-icon>mdi-pencil-box-outline</v-icon>
                    </v-btn>
                    
                     <v-btn
                        color="primary"
                        icon
                        @click="event(item)"
                    >
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                    
                </template> -->

                <template v-slot:[`item.descripcion`]="{item}">
                    

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                            >
                               {{ cutText(item.descripcion) }}
                            </span>
                            </template>
                            <span>{{item.descripcion}}</span>
                    </v-tooltip>
                </template>

                <template v-slot:[`item.documentacion`]="{item}">
                     <center>

                         <v-tooltip v-if="item.documentacion" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="primary"
                            >
                                mdi-file-outline
                            </v-icon>
                            </template>
                            <span>{{item.nDocumentacion}} Archivos cargados..</span>
                    </v-tooltip>
                        <span v-else>No hay documentos...</span>
                     </center>
                </template>

                <template v-slot:[`item.invitados`]="{item}">
                    <center>
                        <span>{{item.invitados}}</span>
                    </center>
                </template>
            
            </v-data-table>

        </CPanelExpansion>
    </div>
</template>
<script>
export default {
    name:'LoginScreen',
    components:{
        CPanelExpansion: () => import('@/components/CPanelExpansion/CPanelExpansion.vue'),
        CFileUploads: () => import('@/components/CFileUploads/CFileUploads.vue')
    },
    data(){
        return {
            loading: false,
            openDialog: false,
            files:[],
            search:'',
            selected:[],
            headers: [
                {
                    text: '#',
                    align: 'center',
                    sortable: false,
                    value: 'n',
                },
                { text: 'Nombre', value: 'nombre' },
                { text: 'Tipo', value: 'tipo' },
                { text: 'Fecha', value: 'fecha' },
                { text: 'Fecha Limite', value: 'fechalimite' },
                { text: 'Descripción', value: 'descripcion' },
                { text: 'Documentación', value: 'documentacion', width: 90, sortable: false },
                { text: 'Invitados', value: 'invitados' , align: 'center'},
                //{ text: 'Actions', value: 'actions', sortable: false ,width: 140, align: 'center', },
            ],
            items: [
                {
                    id:1,
                    nombre: 'Ferio del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 2,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:2,
                    nombre: 'Otra del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 7,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:3,
                    nombre: 'Nueva del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: false,
                    nDocumentacion: 0,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:4,
                    nombre: 'Prueba del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: false,
                    nDocumentacion: 0,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:5,
                    nombre: 'Ferio del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 1,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:6,
                    nombre: 'Ferio del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 2,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
                },
                {
                    id:7,
                    nombre: 'Ferio del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 1,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since'
                },
                {
                    id:8,
                    nombre: 'Ferio del empleo',
                    tipo: 'Ordinaria',
                    fecha: '24/OCT/2020',
                    fechalimite: '24/OCT/2021',
                    documentacion: true,
                    nDocumentacion: 2,
                    invitados: 8,
                    descripcion: 'Lorem Ipsum is simply dummy tex'
                }
            ],
        };
    },
    methods: {
        upload(){
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.openDialog = false;
            }, 5000);
        },
        uploadFiles( values ){
            console.log(values)
        },
        event(item){
            console.log(item)
        },
        cutText(value){
            if(value.length > 54){
                return value.substr(0 , 54) + '...'
            }else{
                return value;
            } 
        },
        getHeight(){
            let height = this.$refs.heightContainerTable;
            console.log(this.$refs)
        },
    },
    computed:{
        isDisableOptionButton(){
            return !this.selected.length > 0 ? true : false
        },
        isDisableEditButton(){
            return this.selected.length === 1 ? false : true
        }
    },
    mounted(){
        this.getHeight()
    }

}
</script>
<style scoped>
    .shortStyle{
        display: flex;
        justify-content: right;
    }
</style>
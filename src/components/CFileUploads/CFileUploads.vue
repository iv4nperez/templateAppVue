<template>
  <div class="text-center">
    <v-dialog v-model="show" width="800" persistent>
      <template v-slot:activator="{ on: dialog, attrs: dialogAttrs }">
         <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip, attrs: tooltipAttrs }">
            <v-btn
                color="primary"
                v-bind="{  ...tooltipAttrs, ...dialogAttrs }"
                v-on="{ ...tooltip, ...dialog }"
                icon
            >
                <v-icon>mdi-upload-outline</v-icon>
            </v-btn>
            </template>
        <span>Cargar Archivos</span>
        </v-tooltip>
      </template>

      <v-card class="py-5">
        <v-card-text class="title-uploads" ref="contentFile">
            Carga de archivos
        </v-card-text>
        <v-card-text style="padding-left: 0px;padding-right: 0px;" >          
            
            <div v-if="loading" class="content-loader-upload">
                <v-progress-circular
                    width="2"
                    size="100"
                    indeterminate
                    color="primary"
                ></v-progress-circular>
                <span class="mt-3">Uploading files ....</span>
            </div>
            <div v-else>
                <div v-if="arraySelecedFile.length === 0" class="first-upload content-files message-drag-content">
                <!-- <span>Drag file here</span>
                <br>
                <span>- or -</span>
                <br> -->
                <v-btn 
                    :loading="isSelecting"
                    @click="onButtonClick" 
                    small 
                    dark 
                    color="#002b4d"
                >Select file from your device</v-btn>
                <input
                    ref="uploader"
                    class="d-none"
                    type="file"
                    multiple
                    @change="onFileChanged"
                    accept="application/pdf,application/vnd.ms-excel,image/*"
                >
            </div>
            <div v-else class="content-file-upload">
                <div ref="scrollToMe"></div>
                <v-card outlined v-for="(item, i) in arraySelecedFile" :key="i" style="border-radius: 0px;">
                    <v-card-text >
                        <v-row>
                            <v-col sm="1">
                                <v-icon color="primary">{{ onSetIconFile(item.type) }}</v-icon>
                            </v-col>
                            <v-col>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <span
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                        {{ cutText(item.name) }}
                                        </span>
                                        </template>
                                        <span>{{ item.name }}</span>
                                </v-tooltip>
                            </v-col>
                            <v-col sm="1">
                                <v-icon @click="removeFile( i )">mdi-close-circle-outline</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
                <v-btn 
                    class="mt-3 ml-2"
                    :loading="isSelecting"
                    @click="onButtonClick" 
                    small 
                    dark 
                    color="#002b4d"
                >Add more files</v-btn>
                <input
                    ref="uploader"
                    class="d-none"
                    type="file"
                    multiple
                    @change="onFileChanged"
                    accept="application/pdf,application/vnd.ms-excel,image/*"
                >
            </div>
            </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

            <slot />

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "CFileUploads",
  props:{
      value: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
  },
  data() {
    return {
        selectedFile: null,
        arraySelecedFile: [],
        isSelecting: false
    };
  },
  methods:{
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.uploader.click()
    },
    onFileChanged(e) {
        e.target.files.forEach(element => {
            this.arraySelecedFile.push( element )  
        });
 
        this.$emit('files', this.arraySelecedFile )
    },
    onSetIconFile(type){
        switch (type) {
            case 'image/jpeg':
                return 'mdi-file-image';  
            
            case 'image/png':
                return 'mdi-file-image';

            case 'application/pdf':
                return 'mdi-file-pdf-box';
            
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                return 'mdi-file-excel';
            
            default:
                break;
        }
    },
    cutText(value){
        if(value.length > 25){
            return value.substr(0 , 25) + '...'
        }else{
            return value;
        } 
    },
    removeFile( fileIndex ) {
        this.arraySelecedFile.splice(fileIndex, 1 );
        this.$emit('files', this.arraySelecedFile )
    }
  },
  computed:{
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    },
    show: {
        get(){
            if(this.value === false){
                this.arraySelecedFile = []
            }
            
            return this.value;
        },
        set(value){
            this.$emit('input', value)
        }
    }
  },
  mounted(){
      console.log(this.$refs)
  }
};
</script>

<style scoped>
    .first-upload{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .content-files{
        height: 500px;
    }

    .message-drag-content {
        font-size: 20px;
    }

    .title-uploads{
        font-size: 20px;
    }

    .content-file-upload{
        height: 500px;
        overflow: auto;
    }

    .content-loader-upload{
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

</style>

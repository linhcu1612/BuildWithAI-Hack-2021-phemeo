try:
    import unzip_requirements
except ImportError:
    pass

from ariadne import ObjectType

mutation = ObjectType("Mutation")